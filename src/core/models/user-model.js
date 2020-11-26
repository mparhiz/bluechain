class AddressDetails {
    address = '';
    locality = '';
    postcode = '';
    countryCode = '';
    state = '';
    poBox = '';
}

class Person {
    givenName = '';
    familyName = '';
    middleName = '';
    fullName = '';
    email = '';
    mobile = '';
    countryOfResidenceCode = '';
    dateOfBirth = '';
    addressDetails = new AddressDetails;
    paymentAlias = '';
}

class Business {
    phoneNumber = '';
    legalName = '';
    businessName = '';
    email = '';
    businessNumber = '';
    defaultCurrency = '';
    defaultTaxSystem = '';
    merchantCategoryCode = '';
    paymentAlias = '';
    url = '';
    addressDetails = new AddressDetails;
    defaultLanguageCode = '';
}

export default class UserModel {
    person = new Person;
    business = new Business;
}