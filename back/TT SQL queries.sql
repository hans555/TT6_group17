SELECT * FROM `transaction`;
SELECT * FROM `exchange_rate`;
SELECT * FROM `wallet`;
SELECT * FROM `user`;
SELECT * FROM `currency`;

/*exchange rate data*/
SELECT rate from `exchange_rate`;

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

INSERT INTO `transaction` (wallet_id, debit_id, debit_currency, debit_amount, 
credit_id, credit_currency, credit_amount, `description`, created_by, updated_by)
VALUES(1, 13, "JPY", 10, 1, "USD", 10, "Test", "Jacky", "Jacky");

<<<<<<< HEAD
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

SELECT amount FROM user u 
LEFT JOIN wallet w ON u.id =  w.user_id 
LEFT JOIN currency c ON w.user_id = c.wallet_id 
WHERE u.username = "user101" AND c.currency = "EUR" 
AND w.id = 1;





