import time                         # To create a time counter to mimic transaction loading

# Customer registered details
saved_password = 1234
saved_balance = 9081726354
customer_phone = '08091234567'

ussd_service = False
ussd = ''
bar = 5            # Number of times customer is allowed to type a wrong password

print(' Welcome To healthy female '.center(30, '*'))

# Check for wrong USSD code and ValueError
try:
    ussd = int(input('Enter 101 to access Favour Bank USSD Service: '))
    if ussd == 101:
        ussd_service = True
    else:
        print('Invalid Request')

except ValueError:
    print('Invalid Request')

# Main Program Loop
while ussd_service is True:
    try:
        print('Choose a transaction\n'
              '1. Ask information\n'
              '2. Make appointment\n'
              '3. Health professionals\n'
              '4. Cancel')

        customer_choice = int(input('Enter: '))

        # CHECK BALANCE
        if customer_choice == 1:

            customer_password = int(input('Enter password: '))

            # Check for correct password
            if customer_password == saved_password:
                print('Choose a transaction\n'
                    '1. Family Planing\n'
                    '2. BREAST CANCER SCREENING\n'
                    '3. OTHER VITAL AND REPRODUCTIVE HEALTH TOPICS\n'
                    '4. Cancel')
                customer_choice2 = int(input('Enter: '))
                if customer_choice2 == 1:
                     print('Family Planing')
                     print('1. Contraception\n')
                     print('2. Abortion\n')
                     print('We give tranings for every one who want to give for special needs childrens love support teach')
                elif customer_choice2 == 2:
                    print('Play therapy is helpfull for children with autism learn to interact with people in a way that they understand ....it is alsoo bring a child out of')
                elif customer_choice2 == 3:
                    print("It is a plan that is help full to ensure that a children with autisms who is attending an elementary or secondary institution receives specialized instruction and related services")
            else:
                bar = bar - 1
                print('Wrong paasword!\nYou would be barred after ' + str(bar) + ' wrong tries\n')

                if bar > 0:
                    continue
                else:
                    print('You have been barred. Visit our nearest branch to unblock your account.')
                    break

        # MONEY TRANSFER
        elif customer_choice == 2:
            appointment_choice = int(input('1. Monday 8:00 am - 4:00 pm\n'
                                    '2. Tuesday 8:00 am - 4:00 pm\n'
                                    '3. Wendsday 8:00 am - 4:00 pm\n'
                                    '4. Thursday 8:00 am - 4:00 pm\n'
                                    '5. Friday 8:00 am - 4:00 pm\n'
                                    'Enter: '))

            if appointment_choice == 1:
                print('You are scheduled on Monday')
            elif appointment_choice == 2:
                print('you are scheduled on Tuesday')
            elif appointment_choice == 3:

                print('you are scheduled on Wendsday')
            elif appointment_choice == 4:
                print('you are scheduled on Thursday')
            elif appointment_choice == 5:
                print('you are scheduled on Friday')
                

            

        # BUY AIRTIME
        elif customer_choice == 3:
            card_purchase = int(input('1. Hana\n'
                                      '2. Selama\n'
                                      'Enter: '))

            phone_number = ''

            if card_purchase == 1:
                print("Hana will contact you now. Thank you.")

            elif card_purchase == 2:
                print("Selam will contact you now. Thank you.")


            else:
                print('Invalid entry!')
                

            

        # CANCEL USSD SERVICE
        elif customer_choice == 4:
            break

        # WRONG CHOICE INPUT
        else:
            print('Wrong input!\n')
            continue

        # PERFORM ANOTHER TRANSACTION
        # Ask if another transaction is to be carried out
        print('\nDo you want to carry out another Conversation?\n'
              '1. Yes\n'
              '2. No')

        another_conversation = int(input('Enter: '))

        if another_conversation == 1:
            ussd_service = True
        else:
            print('Good Day.')
            ussd_service = False

    except ValueError:
        print('Invalid entry\n')

# TODO: Possible additions