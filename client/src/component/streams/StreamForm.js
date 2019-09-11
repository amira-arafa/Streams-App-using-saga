import React from 'react';
import {Field,reduxForm} from 'redux-form';

class StreamForm extends React.Component {
    renderInput=({input,label,meta})=>{
        const className=`field ${meta.error&&meta.touched?'error':""}`
        console.log(meta)

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }
    renderError({error,touched}){
        if(touched&&error){
            return(
                <div className="ui error message">
                    <div className="header">{error}
                    </div>
                </div>
            );
        }
    }
    onSubmit =formValues=> {
        this.props.onSubmit(formValues);
    };
   render(){
    return (<div>
    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="error ui form">
        <Field name='title' component={this.renderInput} label="Enter title"/>
        <Field name='description' component={this.renderInput} label="Enter description"/>
        <button className="ui button primary">submit</button>
    </form>
    </div>  )
   }
}
const validate=(formValues)=>{
    const errors={};
    if(!formValues.title){
        errors.title="you must enter a title";
    }
    if(!formValues.description){
        errors.description="you must enter a description";
    }
    return errors;
}

export default reduxForm({form:'StreamForm',
validate
})(StreamForm);
