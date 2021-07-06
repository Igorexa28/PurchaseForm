export const taxes = [
    { name: 'Choose your tax', value: 0 },
    { name: '10%', value: 10 },
    { name: '20%', value: 20 },
    { name: '30%', value: 30 },
    { name: '40%', value: 40 },
    { name: '50%', value: 50 },
];

export const locations = [
    { name: '-----------', value: '' },
    { name: 'Kharkiv', value: 'kharkiv' },
    { name: 'Kyiv', value: 'kyiv' },
    { name: 'Lviv', value: 'lviv' },
    { name: 'Odessa', value: 'odessa' },
    { name: 'Melitopol', value: 'melitopol' },
];

export const departments = [
    { name: 'CSM', value: 'csm' },
    { name: 'DSM', value: 'dsm' },
    { name: 'ESM', value: 'esm' },
    { name: 'AMD', value: 'amd' }
];

export const paymentMethods = [
    { name: 'Bank transfer', value: 'bank' },
    { name: 'Card transfer', value: 'card' },
    { name: 'Cash', value: 'cash' },
];

export const costCenters = [
    { name: 'Posters 1', value: '1' },
    { name: 'Posters 2', value: '2' },
    { name: 'Posters 3', value: '3' },
    { name: 'Posters 4', value: '4' },
];

export const projects = [
    { name: 'Website', value: 'website' },
    { name: 'Web application', value: 'webapp' },
    { name: 'Desktop application', value: 'desktop' }
];

export const currencies  = [
    { name: 'UAH', value: 'uah' },
    { name: 'EUR', value: 'eur' },
    { name: 'USA', value: 'usa' },
];

export const currencyValues = [
    { name: 'USD:UAH', value: '26.543535' },
    { name: 'USD:EUR', value: '26.543535' },
    { name: 'USD:VND', value: '24234.500000' }
];

export function cleanFields() {
    const inputIds = ['proposal', 'purchase', 'priceFrom',
        'priceTo', 'creationDate', 'deliverydate',
    ], selectIds = [
        'Location', 'requester', 'Department', 'CostCenter'
    ];

    for (let index = 0; index < inputIds.length; index++) {
        let inputElement = document.querySelector(`#${inputIds[index]}`);
        inputElement.value = null;
    }

    for (let index = 0; index < selectIds.length; index++) {
        let inputElement = document.querySelector(`#${selectIds[index]}`);
        inputElement.selectedIndex = 0;
    }
}

export function cleanFieldsOfMain() {
    const inputIds = [ 'deliveryDate', 'legalEntity',
        'note', 'budget' ],
    selectIds = [
        'location', 'taxes', 'department', 'paymentMethod',
        'costCenter', 'project'
    ];

    for (let index = 0; index < inputIds.length; index++) {
        let inputElement = document.querySelector(`#${inputIds[index]}`);
        inputElement.value = null;
    }

    for (let index = 0; index < selectIds.length; index++) {
        let inputElement = document.querySelector(`#${selectIds[index]}`);
        inputElement.selectedIndex = 0;
    }
}

export function hide() {
    document.querySelector('.btnCloseStyle').click();
}