import { useEffect, useContext } from "react";
import { EmployeeContext } from "../componentsEmployeeContext"
import axios from axios;

export function useGet(url) {
    const{employees, setEmployees, displayedEmployees, setDisplayedEmployees} = useContext(EmploeeContext)

    useEffect(() => {
        async function getEmplyees() {
            try {
                const response = await axios.get(url)
                setEmployees(response.data.results)
                setDisplayedEmployees(response.data.results)
            }
            catch (err) {
                console.log("API error occured", error)
            }
        }

        getEmplyees()

    },[])

    function sortFunc(sort) {
        switch(sort) {
            case "name":
                sortByName()
                break
            case "age":
                sortByAge()
                break
            default:
                console.log("sort does not match cases")
        }
    }

    function sortByName() {
        employees.sort(function(a,b) {
            if(a.name.first < b.name.first) {
                return -1;
            }
            else {
                return 1;
            }
        })

        setDisplayedEmployees([...employees])
    }

    function sortByAge() {
        employees.sort(function(a,b) {
            return (a.dob.age - b.dob.age)
        })

        setDisplayedEmployees([...employees])
    }

    function sortByAge() {
        employees.sort(function(a, b) {
            return (a.dob.age - b.dob.age)
        })

        setDisplayedEmployees([...employees])
    }

    return {displayedEmployees, sortFunc}

}
