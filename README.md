# Debounce Typeahead

Debounce typeahead with asynchronous data binding

## Available Scripts

Use the nope js to install packages and start the application by following below script steps:

```bash
npm install
npm start
```
## Usage (DebounceTypeAhead data and methods)

```python
import DebounceTypeAhead from './components/DebounceTypeAhead';

const[typeAheadData,setTypeAheadData]=useState([]);

const testData = [
    { 
      id: 'test2', 
      primaryText: 'Test2', 
      secondryText: 'test2@gmail.com',
      image:"https://homepages.cae.wisc.edu/~ece533/images/cat.png" 
    }];

  const asyncMethod=(value)=>{
      setTypeAheadData(testData)
  }
  }
  const itemSelectHandler=(data)=>{
    console.log(JSON.stringify(data));
  }


```

## How it works

## For Image Type
```python
 <DebounceTypeAhead 
        delay={2000} 
        isSecondryTextVisible={true} 
        placeholder={"Search email id"} 
        onSearch={asyncMethod} 
        type={"IMAGETYPE"}
        typeAheadData={typeAheadData}
        onItemSelect={itemSelectHandler}
        />


```
```type => define the options style i.e "IMAGETYPE" or "TEXTONLY"```

```delay=> debounce delay for trigger the search event```

```onSearch=> which trigger the change handler event with text value```
 
```isSecondryTextVisible=> hide or show the secondry text under options```

```onItemSelect=> trigger the event on select of any item under options with selected typeahead data```

``` typeAheadData => { id: 'test2', primaryText: 'Test2', secondryText: 'test2@gmail.com',image:"https://homepages.cae.wisc.edu/~ece533/images/cat.png" } ```

## For Text Type
```python
 <DebounceTypeAhead 
        delay={2000} 
        isSecondryTextVisible={true} 
        placeholder={"Search email id"} 
        onSearch={asyncMethod} 
        type={"TEXTONLY"}
        typeAheadData={typeAheadData}
        onItemSelect={itemSelectHandler}
        />


```
``` typeAheadData => { id: 'test2', primaryText: 'Test2', secondryText: 'testing',image:"" } ```

## Contributing
For major changes, please open an issue first to discuss what you would like to change.