import { __SYD, __c, __m, __p, __sS, __u , __g} from './sydneyLib/sydneyDom.js'

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:'height:100vh;width:100vw;display:flex;padding:10px;padding-top:20px;row-gap:5px;align-items:center;overflow-x:scroll;flex-direction:column;'
        },[
            __c(
                'a',{
                    href:'/table'
                },
                [
                    "View Table"
                ]
            ),
            __SYD.form()
        ]
    )
}

__SYD.form = () =>{
    return __c(
        'form',
        {
            style:'height:fit-content;width:100%;max-width:500px;padding:5px;display:flex;flex-direction:column;row-gap:20px;position:relative',
            class:'thin_border',
            method:'post',
            action:'update',
            class:'thin_border'
        },
        [
            __c('label',{style:'width:100%;' , for:'date'},['Date',__SYD.inputs({type:'date',name_val:'date'})]),
            __c('label',{style:'width:100%;height:fit-content;' , for:'title'},['Title',__SYD.inputs({name_val:'title',ph:'Title'})]),
            __SYD.category(),
            __c('label',{style:'width:100%;' , for:'notes'},['Notes',__SYD.txt_area({name_val:'notes',ph:'Note'})]),
            __c('label',{style:'width:100%;' , for:'amount'},['Amount',__SYD.inputs({name_val:'amount',ph:'Enter Amount',type:'number'})]),
            __c('label',{style:'margin-bottom:20px;width:100%;' , for:'flutter'},['Flutter Wave Id',__SYD.inputs({name_val:'flutterwaveid',ph:'Enter ID'})]),
            __c(
                'button',
                {
                    type:'submit',
                    style:'padding:10px 15px;width:fit-content;height:50px;outline:none;cursor:pointer;font-weight:700;align-self:flex-end',
                    class:'thin_border'
                },
                [
                    'Submit'
                ]
            )
            // __c('label',{style:'margin-bottom:20px;width:100%;' , for:'name'},['Name',__SYD.inputs({name_val:'name',ph:'Enter Name'})]),
        ],
        {
            events:{
                onsubmit:() =>{
                    alert('data updated');
                }
            }
        }
    )
}

__SYD.inputs = ({name_val , type = 'text' , ph = ''} = {}) =>{
    return __c(
        'input',
        {
            style:'height:50px;width:100%;outline:none;margin-top:5px;',
            type:type,
            name:name_val,
            id:name_val,
            placeholder:ph
        }
    )
}

__SYD.txt_area = ({name_val , type = 'text' , ph = ''} = {}) =>{
    return __c(
        'textarea',
        {
            style:'height:50px;width:100%;outline:none;margin-top:15px;',
            type:type,
            name:name_val,
            id:name_val,
            placeholder:ph
        }
    )
}

__SYD.category = () =>{
    return __c(
        'select',
        {
            style:'height:50px;font-size:14px;text-transform:capitalize;font-weight:700;width:100%;font-size:14px;font-weight:700;',
            name:'category'
        },
        [
            __c(
                'option',{
                    value:'category',
                    selected:true
                },
                [
                    'category'
                ]
            ),
            __c(
                'option',{
                    value:'order delivery subsidy',
                },
                [
                    'order delivery subsidy'
                ]
            ),
            __c(
                'option',{
                    value:'social media ads',
                },
                [
                    'social media ads'
                ]
            ),
            __c(
                'option',{
                    value:'salary payment',
                },
                [
                    'salary payment'
                ]
            ),
            __c(
                'option',{
                    value:'logistics',
                },
                [
                    'logistics'
                ]
            )
        ]
    )
}

__m(__SYD.container());