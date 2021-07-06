import '../styles/PurchaseForm.css';
import '../styles/Exchange.css';
import React, { useState } from 'react';
import ContentBlock from './ContentBlock';
import CustomSelect from './CustomSelect';
import { taxes, locations, departments, paymentMethods, costCenters, projects, cleanFieldsOfMain } from '../data';

const PurchaseForm = () => {
    const [ location, setLocation ] = useState('');
    const [ tax, setTaxes ] = useState('');
    const [ project, setProject ] = useState('');
    const [ department, setDepartment ] = useState('');
    const [ costCenter, setCostCenter ] = useState('');
    const [ deliveryDate, setDeliveryDate ] = useState('');
    const [ legalEntit, setLegalEntit ] = useState('');
    const [ paymentMethod, setPaymentMethod ] = useState('');
    const [ note, setNote ] = useState('');
    const [ budget, setBudget ] = useState('');
    
    const handleTaxes = event => setTaxes(event.target.value);
    const handleProjects = event => setProject(event.target.value);
    const handleLocation = event => setLocation(event.target.value);
    const handleDepartment = event => setDepartment(event.target.value);
    const handleCostCenter = event => setCostCenter(event.target.value);
    const handleDeliveryDate = event => setDeliveryDate(event.target.value);
    const handleLegalEntit = event => setLegalEntit(event.target.value);
    const handlePayment = event => setPaymentMethod(event.target.value);
    const handleNote = event => setNote(event.target.value);
    const handleBudget = event => setBudget(event.target.value);

    function handleSubmit(event) {
        if (department !== '' && costCenter !== '') {

            const dataToSend = {
                "Delivery-date": deliveryDate,
                "Location": location,
                "Legal-entity": legalEntit,
                "Department": department,
                "Cost-center": costCenter,
                "Taxes": tax,
                "Payment-method": paymentMethod,
                "Project": project,
                "Budget": budget,
                "Note": note,
            };
    
            console.log(JSON.stringify(dataToSend));

            cleanFieldsOfMain();
        } else {
            alert('Please fill in all required fields(department, cost center).');
        }

        event.preventDefault();
    }

    let legalEntity = null, textArea = null;

    if (location === '') {
        legalEntity = (
            <input 
                type="text" 
                className="textInput" 
                id="legalEntity"
                placeholder=" ! select Location first" 
                required 
                disabled 
            />
        );
    } else if (location !== '') {
        legalEntity = ( 
            <input
                type="text" 
                className="textInput" 
                id="legalEntity" 
                onChange={handleLegalEntit} 
                required
            />
        );
    }

    if (location && deliveryDate && project && department && costCenter) {
        textArea = (
            <textarea 
                id="budget"
                onChange={handleBudget}
            />
        );
    } else {
        textArea = (
            <textarea 
                id="budget" placeholder=" ! to view Budgets select:
                - Delivery date, Location
                - Department, Cost center, Project" 
                disabled
            />
        );
    }

    return (
            <div className="mainField">

                <form onSubmit={handleSubmit}>

                <div className="firstSection">
                    <ContentBlock classForBlock="contentBlock" classForName="nameOfBlock" nameBlock="Delivery date" isRequired={ true } >
                        <input type="date" className="dateInput" id="deliveryDate" onChange={handleDeliveryDate} required />
                    </ContentBlock> 

                    <ContentBlock classForBlock="contentBlock" classForName="nameOfBlock" nameBlock="Location" isRequired={ true }>
                        <CustomSelect data={ locations } classToUse={ 'selectStyle' } id="location" isRequired={ true } handleChange={handleLocation} />
                    </ContentBlock>

                    <ContentBlock classForBlock="contentBlock" classForName="nameOfBlock" nameBlock="Legal Entity" isRequired={ true }>
                        { legalEntity }
                    </ContentBlock>

                    <ContentBlock classForBlock="contentBlock" classForName="nameOfBlock" nameBlock="Taxes" >
                        <CustomSelect data={ taxes } classToUse={ "selectStyle" } id="taxes" isRequired={ false } handleChange={handleTaxes} />
                    </ContentBlock>
                </div>


                <div className="secondSection">
                    <ContentBlock  classForBlock="contentBlock" classForName="nameOfBlock" nameBlock="Supplier" isRequired={ true }>
                        <div>Amazon</div>
                    </ContentBlock>

                    <ContentBlock  classForBlock="contentBlock" classForName="nameOfBlock" nameBlock="Currency" isRequired={ true }>
                        <div>USD</div>
                    </ContentBlock>

                    <ContentBlock  classForBlock="contentBlock" classForName="nameOfBlock" nameBlock="Terms of Payment" isRequired={ true }>
                        <div>Prepayment</div>
                    </ContentBlock>

                    <ContentBlock  classForBlock="contentBlock" classForName="nameOfBlock" nameBlock="Contract" isRequired={ true }>
                        <div># 20304 - Precoro Inc.</div>
                    </ContentBlock>
                </div>

                <div className="thirdSection">
                    <ContentBlock classForBlock="contentBlock" classForName="nameOfBlock" nameBlock="Department" isRequired={ true }>
                        <CustomSelect data={ departments } classToUse={ "selectStyle" } id="department" isRequired={ true } handleChange={handleDepartment}  />
                    </ContentBlock>

                    <ContentBlock classForBlock="contentBlock" classForName="nameOfBlock" nameBlock="Payment method" isRequired={ false }>
                        <CustomSelect data={ paymentMethods } classToUse={ "selectStyle" } id="paymentMethod" isRequired={ false } handleChange={handlePayment}  />
                    </ContentBlock>

                    <ContentBlock  classForBlock="contentBlock" classForName="nameOfBlock" nameBlock="Cost center" isRequired={ true }>
                        <CustomSelect data={ costCenters } classToUse={ "selectStyle" } id="costCenter" handleChange={handleCostCenter} isRequired={ true } />
                    </ContentBlock>

                    <ContentBlock classForBlock="contentBlock" classForName="nameOfBlock" nameBlock="Project">
                        <CustomSelect data={ projects } classToUse={ "selectStyle" } id="project" handleChange={handleProjects} isRequired={ false } />
                    </ContentBlock>
                </div>

                <div className="fourthSection">
                    <div>
                        <div>Budgets</div>
                        <div>
                            { textArea }
                        </div>
                    </div>
                    <div>
                        <div>Note</div>
                        <div>
                            <textarea id="note" onChange={handleNote} placeholder="write your note..." />
                        </div>
                    </div>
                </div>

                    <div className="fifthSection">
                        <div>
                            <button type="submit">Create</button>
                        </div>
                        <div>
                            Total: <span>5100 UAH</span>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default PurchaseForm;