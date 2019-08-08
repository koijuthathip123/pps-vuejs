import Vue from 'vue'
import VeeValidate from 'vee-validate'


const dictionary = {
    en: {
        messages: {
            required(field) {
                return field + ' ไม่สามารถเป็นค่าว่าง'
            },
            min(field, args) {
                return field + ' ต้องป้อนข้อมูลอย่างน้อย ' + args[0]
            }
        },
        attributes: {
            firstName: 'ชื่อ',
            lastName: 'นามสกุล'
        }
    }
}

Vue.use(VeeValidate, {
    dictionary: dictionary
})