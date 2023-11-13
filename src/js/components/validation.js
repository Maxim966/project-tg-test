import {validateForms} from '../functions/validate-forms';


const rules1 = [
  {
    ruleSelector: '.modal-name',
    rules : [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя!'
      }
    ]
  },
  {
    ruleSelector:'.modal-email',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Поле является обязательным для заполнения!',
      },
      {
        rule: 'email',
        errorMessage: 'Вы не ввели e-mail',
      },

    ]
  },
  {
    ruleSelector:'.modal-password',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Поле является обязательным для заполнения!'
      },
      {
        rule: 'strongPassword',
        errorMessage: 'Пароль должен содержать минимум восемь символов, по крайней мере одну заглавную букву, одну строчную букву, одну цифру и один специальный символ.'
      },
    ]
  },
  {
    ruleSelector:'.modal-phone',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.modal-checkbox',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Дайте согласие на принятие пользовательского соглашения'
      }
    ]
  }
];

const afterForm = () => {
  console.log('Произошла отправка');
}

validateForms('.modal-form', rules1, afterForm);


