
USE CUSTOMER_DB;

DELIMITER &&
CREATE PROCEDURE q41()
BEGIN
DECLARE NAMEE varchar(30);
	DECLARE something INT DEFAULT 0;
	DECLARE CITY varchar(30);
	DECLARE COUNTRY varchar(30);
	DECLARE GRADEE INT;
	
	DECLARE Result CURSOR 
	FOR
	SELECT CUST_NAME, CUST_CITY, CUST_COUNTRY, GRADE
	FROM customer
	WHERE AGENT_CODE like "A00%";
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET something=1;
	OPEN Result;
    
	FETCH NEXT FROM Result INTO NAMEE,CITY,COUNTRY,GRADEE;

	loopi: LOOP
		SELECT NAMEE,CITY,COUNTRY,GRADEE;
		FETCH NEXT FROM Result INTO NAMEE,CITY,COUNTRY,GRADEE;
        IF something=1
			THEN LEAVE loopi;
        END IF;
	END LOOP loopi;
CLOSE Result;
END&&

DELIMITER ;

call q41();

