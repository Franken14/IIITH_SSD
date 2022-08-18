SELECT DEPT_LOCATIONS.Dnumber AS "Dept ID",Dname AS "Dept Name",COUNT(Dlocation) AS "Number of Locations" from DEPARTMENT,DEPT_LOCATIONS WHERE DEPARTMENT.Dnumber=DEPT_LOCATIONS.Dnumber and DEPARTMENT.Dnumber IN(SELECT Dnumber from DEPARTMENT where Mgr_ssn IN(SELECT Essn from DEPENDENT WHERE Essn IN(SELECT Essn from DEPENDENT where sex="F")GROUP BY Essn HAVING COUNT(*)>1))GROUP BY Dname;