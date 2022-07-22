SELECT * FROM `transaction`;
SELECT * FROM `exchange_rate`;
SELECT * FROM `wallet`;
SELECT * FROM `user`;
SELECT * FROM `currency`;

/*exchange rate data*/
SELECT rate from `exchange_rate` WHERE exchange_currency = 'CAD';

/*transaction data*/
SELECT * from `transaction` WHERE  wallet_id = 1;

/*currency data*/
SELECT * 
FROM `user` u
LEFT JOIN wallet w
ON u.id =  w.user_id 
LEFT JOIN currency c
ON w.user_id = c.wallet_id
WHERE username = 'user101';


/*delete data*/
DELETE multicurrency.currency
FROM multicurrency.currency
LEFT JOIN multicurrency.wallet
ON multicurrency.currency.wallet_id = multicurrency.wallet.user_id
LEFT JOIN multicurrency.user
ON multicurrency.wallet.user_id = multicurrency.user.id
where multicurrency.user.username = 'user101' 
AND  multicurrency.currency.currency = 'CAD';


=======
UPDATE `currency`
SET amount = amount - {value}
WHERE wallet_id = {wallet_id} and currency = {debit_currency}

UPDATE `currency`
SET amount = amount + {value}
WHERE wallet_id = {wallet_id} and currency = {credit_currency}
>>>>>>> 7320c90 (Modified sql file)








