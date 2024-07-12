"use client";

import APP from "@/config";
import React, { useEffect, useState } from 'react';
import { Button, Modal, Input, Form } from 'antd';

const initialValues = {
    fullName: "",
    company: "",
    phoneNum: "",
    streetOne: "",
    streetTwo: "",
    city: "",
    state: "",
    country: "",
};

const AddressModal = (
    {
        getAddresses,
        isEdit,
        setEdit,
        selectedAddr
    }
        :
        {
            getAddresses: any,
            isEdit: boolean,
            setEdit: any,
            selectedAddr: any
        }
) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState(initialValues);
    const [validations, setValidations] = React.useState({
        fullName: '',
        streetOne: '',
        city: '',
        state: '',
        country: '',
    })

    const showModal = () => {
        setOpen(true);
    };

    const handleAdd = async (e: any) => {
        e.preventDefault()

        const isValid = validateAll()

        if (!isValid) {
            return false
        }

        setLoading(true);
        if (values.fullName && values.streetOne && values.city && values.state) {

            try {
                await fetch(`${APP.URL}/api/addresses/create`, {
                    method: "POST",
                    cache: "no-store",
                    headers: {
                        accept: "application/json",
                    },
                    body: JSON.stringify(values),
                })
                getAddresses();
                handleCancel();
            } catch (error) {
            }
        }
        setLoading(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleEdit = async (e: any) => {
        e.preventDefault()

        const isValid = validateAll()

        if (!isValid) {
            return false
        }
        setLoading(true);
        if (values.fullName && values.streetOne && values.city && values.state) {
            try {
                await fetch(`${APP.URL}/api/addresses/update?id=` + selectedAddr.id, {
                    method: "POST",
                    cache: "no-store",
                    headers: {
                        accept: "application/json",
                    },
                    body: JSON.stringify(values),
                })
                getAddresses();
                handleCancel();
            } catch (error) {
            }
        }
        setLoading(false);
    };

    const handleChange = (e: any) => {
        setValues(values => {
            return { ...values, [e.target.name]: e.target.value };
        });
    };

    const handlePhoneChange = (e: any) => {
        const RE = /^[0-9\b\+\-\(\)]+$/;
        e.preventDefault();
        if (RE.test(e.currentTarget.value)) {
            setValues({ ...values, phoneNum: e.currentTarget.value });
        }
    }

    const validateAll = () => {
        const { fullName, streetOne, city, state, country } = values
        const validations = { fullName: '', streetOne: '', city: '', state: '', country: '' }
        let isValid = true

        if (!fullName) {
            validations.fullName = 'Full Name is required'
            isValid = false
        }

        if (fullName && fullName.length < 3 || fullName.length > 50) {
            validations.fullName = 'Full Name must contain between 3 and 50 characters'
            isValid = false
        }

        if (!streetOne) {
            validations.streetOne = 'Street is required'
            isValid = false
        }

        if (streetOne && streetOne.length < 3 || streetOne.length > 50) {
            validations.streetOne = 'Street must contain between 3 and 50 characters'
            isValid = false
        }

        if (!city) {
            validations.city = 'City is required'
            isValid = false
        }

        if (city && city.length < 3 || city.length > 50) {
            validations.city = 'City must contain between 3 and 50 characters'
            isValid = false
        }

        if (!state) {
            validations.state = 'State is required'
            isValid = false
        }

        if (state && state.length < 3 || state.length > 50) {
            validations.state = 'State must contain between 3 and 50 characters'
            isValid = false
        }

        if (!country) {
            validations.country = 'Country is required'
            isValid = false
        }

        if (country && country.length < 3 || country.length > 50) {
            validations.country = 'Country must contain between 3 and 50 characters'
            isValid = false
        }

        if (!isValid) {
            setValidations(validations)
        }

        return isValid
    }

    const { 
        fullName: nameVal, 
        streetOne: streetVal, 
        city: cityVal,
        state: stateVal,
        country: countryVal,
      } = validations

    useEffect(() => {
        if (isEdit) {
            const editAddr = {
                fullName: selectedAddr.full_name,
                company: selectedAddr.company_name,
                phoneNum: selectedAddr.phone_number,
                streetOne: selectedAddr.street_one,
                streetTwo: selectedAddr.street_two,
                city: selectedAddr.city_name,
                state: selectedAddr.state_code,
                country: selectedAddr.country,
            };
            setValues(editAddr);
            showModal();
        }
    }, [isEdit])

    useEffect(() => {
        if (!open) {
            setEdit(false);
        }
    }, [open])

    const validateOne = (e: any) => {
        const { name } = e.target
        const value = e.target.value;
        let message = ''

        if (!value) {
            message = `${name} is required`
        }

        if (value && (value.length < 3 || value.length > 50)) {
            message = `${name} must contain between 3 and 50 characters`
        }

        setValidations({ ...validations, [name]: message })
    }

    return (
        <div className='py-3 px-6 text-right bg-white'>
            <Button className='bg-blue-500' type="primary" onClick={showModal}>
                Add Address
            </Button>
            <Modal
                open={open}
                title={isEdit ? "Edit Address" : "Add Address"}
                centered
                onOk={handleAdd}
                onCancel={handleCancel}
                footer={[
                    !isEdit ?
                        <Button className='bg-blue-500' key="submit" type="primary" loading={loading} onClick={handleAdd}>
                            Add
                        </Button>
                        :
                        <Button className='bg-blue-500' key="submit" type="primary" loading={loading} onClick={handleEdit}>
                            Edit
                        </Button>
                    ,
                ]}
            >
                <div>
                    <div>
                        <p className='my-2' aria-required>Full Name * </p>
                        <Input
                            size="large"
                            placeholder="Full Name"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={validateOne}
                        />
                        <div className="text-red-700">{nameVal}</div>
                    </div>
                    <div>
                        <p className='my-2'>Company Name</p>
                        <Input
                            size="large"
                            placeholder="Company Name"
                            name="company"
                            value={values.company}
                            onChange={handleChange}
                            onBlur={validateOne}
                        />
                    </div>
                    <div>
                        <p className='my-2'>Phone Number</p>
                        <Input
                            size="large"
                            placeholder="Phone Number"
                            name="phoneNum"
                            value={values.phoneNum}
                            onChange={handlePhoneChange}
                            onBlur={validateOne}
                        />
                    </div>
                    <div>
                        <p className='my-2' aria-required>Street One * </p>
                        <Input
                            size="large"
                            placeholder="Street One"
                            name="streetOne"
                            value={values.streetOne}
                            onChange={handleChange}
                            onBlur={validateOne}
                        />
                        <div className="text-red-700">{streetVal}</div>
                    </div>
                    <div>
                        <p className='my-2'>Street Two</p>
                        <Input
                            size="large"
                            placeholder="Street Two"
                            name="streetTwo"
                            value={values.streetTwo}
                            onChange={handleChange}
                            onBlur={validateOne}
                        />
                    </div>
                    <div>
                        <p className='my-2' aria-required>City * </p>
                        <Input
                            size="large"
                            placeholder="City"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={validateOne}
                        />
                        <div className="text-red-700">{cityVal}</div>
                    </div>
                    <div>
                        <p className='my-2' aria-required>State * </p>
                        <Input
                            size="large"
                            placeholder="State"
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={validateOne}
                        />
                        <div className="text-red-700">{stateVal}</div>
                    </div>
                    <div>
                        <p className='my-2' aria-required>Country * </p>
                        <Input
                            size="large"
                            placeholder="Country"
                            name="country"
                            value={values.country}
                            onChange={handleChange}
                            onBlur={validateOne}
                        />
                        <div className="text-red-700">{countryVal}</div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AddressModal;