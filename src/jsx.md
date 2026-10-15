**what is jsx** 

~ jsx stand for javascript xml (extensible markup language) it give you feature to write 
html code inside javascript 
component is maid by using all jsx code and called using like tag 
example:
const element=<h1>hello world</h1>;

**jsx syntax rules**

~ return only parent element like
return(
    <div>
    <h1>hello</h1>
    <p>world<p>
    </div>
) ;
--we cannot tale another div (parent element) without fregmentation--

~ use camelCase for attribute like classname ,onClick:-
<button className="btn" onClick=(handleclick)>click me</button>

**props component**
prop is a short form of properties it is use to pass the data from one component to another component basically from parent to child component .it is written inside child component as parameters and sinked data from parent component to as attribute name and value 

**STATE MANAGEMENT**

State management in react is use to change data and show the updated record 

it is done by three ways:

**1.simple or component state management**
-done by using use state. 

**2.component with complexity state management**
-done by using use reducers-previous state is dependent on the current one.

3.**application level state management**
-it is like user dashbord ,admin dashbord done by using redux or reduc toolkit.

**lifting state up**

when two component need to share the same state move the state to their common parent 

**passing state as props**

you can pass the current state value to another components using props this concept is known as passing state as props.
**Event handeling in react**
in react we can handle user action like clicks typing or hoverhandeling using event handelers.
example-button click

function click(){
    function handeler(){
        alert(click)
    }
    return
}
event binding
in class compont we often need to bind the event handeler using this keyword with bind(method)
handleClick(){
    alert("hello",this.sttate.name)
}
in functional component you don't need binding.

//home about contact services

**Useeffect hook in react**
28-9
useeffect hook let you run the code aafter your component in render.desplaid it contained dependancy of arry
**dependancy of array
it is defined using [] it controll the useeffect running process when dependancy array is blank in useeffect it will only runs .
if anny kind of value or property written inside dependancy array like[name]so useeffect run again and again when the name is changes 
-useeffect is used to fetch the api data in the component 











