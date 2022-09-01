USE CUSTOMER_DB;


DELIMITER &&
CREATE PROCEDURE Addm(
IN a int,
IN b int,
OUT res int 
)
BEGIN
SET res=a+b;
END&&

DELIMITER ;

SET @a=5;
SET @b=25;
SET @res=0;
call Addm(@a,@b,@res);
SELECT @res;

