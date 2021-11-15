# FlexMoneyAssignment

## Yoga Admission Form

### The project is divided into three section

1. Registration on the portal
2. Making Payment
3. Confirmation and Database storage

### Registration Page

1. Any user age between 18 - 65 can register on the portal.
2. User need to fill their basic details.
3. After successful registration, payment page will open

### Payment Page

1. After successful registration, user need to pay a fixed amount of INR 500/-.
2. User can choose payment method as Debit Card or Credit Card.
3. User need to fill the card detail.
4. After filling correct information, payment will be successful and confirmation message is shown.

### Confirmation Page

1. After successful payment, a comfirmation will be shown.

### Database

1. After successful payment, user data will be stored in the database.
2. Database store all information after payment.

## Important Assumptions made

1. There is no need of login and verification, just register and pay and you get your slot.
2. Every user have a unique ID which will be used to access the service within slot.
3. Payment detail should not be stored just shown there.
4. By clicking on Payment button, payment will be successful.
5. Validity of one time payment is till last day of the month.
6. User need to register and make payment again for booking a new slot.
7. User cannot book more than one time in a month to avoid clash with other slot.
8. Users are Indian citizen. 10 digit mobile no validation.

## Other important details

1. The validation is done for the registration page only.
2. Plain password is stored in the database.

# Step to run the project

1. Clone the repo.
2. Intall node and mongoDB.
3. Install dependencies mention in package.json file.
4. Run mongoDB.
5. Navigate to src folder and run command "node app.js"
