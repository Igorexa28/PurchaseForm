import Modal from './Modal';
import '../styles/HeadFilter.css';
import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import ContentBlock from './ContentBlock';
import { useForm } from 'react-hook-form';
import { taxes, locations, departments, projects, currencies, cleanFields, hide } from '../data';

const HeadFilter = () => {
    const [ cost, setCost ] = useState('');
    const [ isOpen, setIsOpen ] = useState(false);
    const [ location, setLocation ] = useState('');
    const [ currency, setCurrency ] = useState('');
    const [ requester, setRequester ] = useState('');
    const [ department, setDepartment ] = useState('');

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const secondData = {
            cost,
            department,
            location,
            requester,
            currency
        };

        const dataToSend = Object.assign(data, secondData);
        console.log(JSON.stringify(dataToSend));

        cleanFields();

        setCost('');
        setLocation('');
        setCurrency('');
        setRequester('');
        setDepartment('');
    };

    const openModal = () => setIsOpen(true);

    const handleCost = event => setCost(event.target.value),
        handleDepartment = event => setDepartment(event.target.value),
        handleLocation = event => setLocation(event.target.value),
        handleRequester = event => setRequester(event.target.value),
        handleCurrency = event => setCurrency(event.target.value);

    return (

        <>
        <Modal open={ isOpen } classModal="modal_styles" onClose={ () => setIsOpen(false) }>

        <div className="mainContainer" style={{ paddingTop: '20px' }}>

        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="firstContainer">

                <ContentBlock classForBlock="contentBlockModal" classForName="nameOfBlock" nameBlock="Request for proposals" isRequired={ false }>
                    <input type="text" className="textInputModal" name="proposal" id="proposal" {...register("proposal", { minLength: 1, maxLength: 25 })} 
                    /> 
                </ContentBlock>

                <ContentBlock classForBlock="contentBlockModal" classForName="nameOfBlock" nameBlock="Purchase requsition number" isRequired={ false }>
                    <input type="text" className="textInputModal" name="purchase" id="purchase" {...register("purchase", { minLength: 1, maxLength: 10 })} /> 
                </ContentBlock>

                <ContentBlock classForBlock="contentBlockModal" classForName="nameOfBlock" nameBlock="Location" isRequired={ false }>
                    <CustomSelect data={ locations } classToUse={ 'selectModal' } id="Location" handleChange={handleLocation}  /> 
                </ContentBlock>

                <ContentBlock classForBlock="contentBlockModal" classForName="nameOfBlock" nameBlock="Requester" isRequired={ false }>
                    <CustomSelect data={ projects } classToUse={ 'selectModal' } id="requester" handleChange={handleRequester} /> 
                </ContentBlock>

                <div style={{ display: 'flex' }}>

                    <ContentBlock classForBlock="smallContentBlockModal" classForName="nameOfBlock" nameBlock="Requester" isRequired={ false }>
                        <input type="text" className="inputFrom" name="priceFrom" id="priceFrom" placeholder="From" {...register("priceFrom", { minLength: 1, maxLength: 6, pattern: /[0-9]/ig })} />
                    </ContentBlock>

                    <div className="customBlock">
                        <CustomSelect data={ currencies } classToUse={ 'currencySelect' } id="currency" handleChange={handleCurrency} />
                        <div>
                            <input type="text" className="inputFrom" name="priceTo" id="priceTo" placeholder="To" {...register("priceTo", { minLength: 1, maxLength: 9, pattern: /[0-9]/ig })} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="secondContainer">
                <ContentBlock classForBlock="contentBlockModal" classForName="nameOfBlock" nameBlock="Creation date" isRequired={ false }>
                    <input type="text" className="textInputModal" name="creationDate" id="creationDate" placeholder="All dates" {...register("creationDate", { minLength: 1, maxLength: 30, pattern: /[A-Za-z0-9]/ig })}  /> 
                </ContentBlock>

                <ContentBlock classForBlock="contentBlockModal" classForName="nameOfBlock" nameBlock="Delivery date" isRequired={ false }>
                    <input type="text" className="textInputModal textInputModalBlue" name="deliverydate" id="deliverydate" placeholder="May 11 - May 28" {...register("deliveryDate", { minLength: 5, maxLength: 35, pattern: /[A-Za-z0-9]/ig })  } /> 
                </ContentBlock>

                <ContentBlock classForBlock="contentBlockModal" classForName="nameOfBlock" nameBlock="Department" isRequired={ false }>
                    <CustomSelect data={ taxes } classToUse={ 'selectModal' } id="Department" handleChange={handleDepartment} /> 
                </ContentBlock>

                <ContentBlock classForBlock="contentBlockModal" classForName="nameOfBlock" nameBlock="Cost center" isRequired={ false }>
                    <CustomSelect data={ departments } classToUse={ 'selectModal' } id="CostCenter" handleChange={handleCost} /> 
                </ContentBlock>
            </div>

            <div className="thirdContainer"> 
                <div>
                    <button onClick={cleanFields}>Reset filters</button>
                </div>
                    <div>
                        <div>
                            <button onClick={() => alert('Filter was saved.')}>Save filter</button>
                            <button onClick={hide}>Hide button</button>
                        </div>
                        <button type="submit">Filter</button>
                    </div>
                </div>
                </form>
            </div> 
        </Modal>
        

        <div className="upperBlock">
            
            <div>
                <button onClick={openModal} >
                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: "10px", paddingBottom: "1px" }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.9204 1.991H8.4249H1.08055C0.705654 2.02245 0.344966 1.84022 0.147842 1.51978C-0.0492808 1.19934 -0.0492808 0.795239 0.147842 0.474799C0.344966 0.15436 0.705654 -0.0278629 1.08055 0.00358612H7.98913H9.00427H13.9185C14.2933 -0.0282367 14.6542 0.153625 14.8516 0.473865C15.0491 0.794106 15.0495 1.19821 14.8527 1.51885C14.6559 1.83948 14.2954 2.02207 13.9204 1.991ZM4.07313 3.98543H7.99012H9.00526H10.9279C11.3028 3.95398 11.6634 4.13621 11.8606 4.45665C12.0577 4.77708 12.0577 5.18119 11.8606 5.50163C11.6634 5.82207 11.3028 6.00429 10.9279 5.97284H8.4239H4.07114C3.69621 6.00391 3.33571 5.82133 3.13891 5.50069C2.94211 5.18006 2.94251 4.77595 3.13995 4.45571C3.3374 4.13547 3.69827 3.95361 4.07313 3.98543ZM7.06472 7.97422H6.99292H8.00807H7.93627C8.31117 7.94277 8.67186 8.12499 8.86898 8.44543C9.06611 8.76587 9.06611 9.16997 8.86898 9.49041C8.67186 9.81085 8.31117 9.99308 7.93627 9.96163H7.4267H7.06273C6.6878 9.9927 6.32729 9.81011 6.13049 9.48948C5.93369 9.16884 5.9341 8.76474 6.13154 8.44449C6.32899 8.12425 6.68985 7.94239 7.06472 7.97422Z" fill="#5093E1"/>
                    </svg>
                    Show filters
                </button>
            </div>

            <div className="differentFilteres">
                <div>
                    <span>Categories</span>
                    <ul>
                        <li>
                            <input type="checkbox" name="categoryOfProduct" value="all" /> All
                        </li>
                        <li>
                            <input type="checkbox" name="categoryOfProduct" value="products" /> Products
                        </li>
                        <li>
                            <input type="checkbox" name="categoryOfProduct" value="newProducts" /> New Product
                        </li>
                    </ul>
                </div>
            <div>
                <span>Items</span>
                <ul>
                    <li>
                        <input type="checkbox" /> All
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
};

export default HeadFilter;