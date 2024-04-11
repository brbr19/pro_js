// Оголошення об'єкту company
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName) {
    function findCompany(company, name) {
        if (company.name === name) {
            console.log(`Знайдено компанію ${companyName}:`);
            console.log(company);
            return;
        }

        if (company.clients && company.clients.length > 0) {
            for (let client of company.clients) {
                if (client.name === name) {
                    console.log(`Знайдено компанію ${companyName}:`);
                    console.log(client);
                    return;
                }

                if (client.partners && client.partners.length > 0) {
                    findCompany(client, name);
                }
            }
        }
    }

    findCompany(company, companyName);
}

// Приклад виклику функції для пошуку компанії 'Клієнт 1.2.3'
findValueByKey('Клієнт 1.2.3');