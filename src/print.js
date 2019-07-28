import _ from 'lodash'

export default function printMe(){
    console.log(_.join(['this', 'is', 'printMe', 'message'], '~'));
}