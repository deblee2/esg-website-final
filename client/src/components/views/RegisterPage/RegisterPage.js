import React, { useState } from "react";
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";

import {
  Form,
  Input,
  Button,
  Select,
  Option
} from 'antd';

  // 투자 성향이랑 선호 지표
const InvestStyleChoice = [
  { key: 1, value: "단기투자" },
  { key: 2, value: "장기투자" }
]

const InvestPreferChoice = [
  { key: 1, value: "E class" },
  { key: 2, value: "S class" },
  { key: 3, value: "G class" },
  { key: 4, value: "P class" },
  { key: 5, value: "ESG" },
  { key: 6, value: "Total" },
]

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegisterPage(props) {
  //훅(Hook)은 반드시 함수 컴포넌트 내부에 호출해야한다.
  // const [InvestStyleChoiceValue, setInvestStyleChoiceValue] = useState(1)

  // const onInvestStyleChoiceSelectChange = (event) => {
  //   setInvestStyleChoiceValue(event.currentTarget.value)
  // }

  // const [InvestPreferChoiceValue, setInvestPreferChoiceValue] = useState('E class')

  // const onInvestPreferChoiceSelectChange = (event) => {
  //   setInvestPreferChoiceValue(event.currentTarget.value)
  // }

  const dispatch = useDispatch();
  return (

    <Formik
      initialValues={{
        email: '',
        lastName: '',
        name: '',
        password: '',
        confirmPassword: '',
        investStyle:'',
        investPrefer:''
      }}

      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required('Name is required'),
        lastName: Yup.string()
          .required('Last Name is required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
        investStyle: Yup.string()
          .required('Investment Style is required'),
        investPrefer: Yup.string()
          .required('Investment Preference is required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            email: values.email,
            password: values.password,
            name: values.name,
            lastname: values.lastName, //lastname
            investstyle: values.investStyle, //investstyle
            investprefer: values.investPrefer, //investprefer
            //image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`
          };

          dispatch(registerUser(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg)
            }
          })

          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app">
            <h2>Sign up</h2>
            <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >

              <Form.Item required label="Name">
                <Input
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
              </Form.Item>

              <Form.Item required label="Last Name">
                <Input
                  id="lastName"
                  placeholder="Enter your Last Name"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName ? 'text-input error' : 'text-input'
                  }
                />
                {errors.lastName && touched.lastName && (
                  <div className="input-feedback">{errors.lastName}</div>
                )}
              </Form.Item>

              <Form.Item required label="Email" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                <Input
                  id="email"
                  placeholder="Enter your Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item required label="Password" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item required label="Confirm" hasFeedback>
                <Input
                  id="confirmPassword"
                  placeholder="Enter your password again"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </Form.Item>
              
              {/* 여기서부터
              <Form.Item required label="Investment Style">
                <Select 
                  onChange={onInvestStyleChoiceSelectChange} 
                  value={InvestStyleChoiceValue}
                  id="investStyle"
                  placeholder="Enter your Investment Style"
                  // type="text"
                  // value={values.investStyle}
                  // onChange={handleChange}
                  onBlur={handleBlur}
                  // className={
                  //   errors.investStyle && touched.investStyle ? 'text-input error' : 'text-input'
                >
                  {InvestStyleChoice.map(item => (
                    <option key={item.key} value={item.key}>{item.value} </option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item required label="Invest Preference">
                    <option key={item.key} value={item.key}>{item.value} </option>
                  ))}
                </Select>
              </Form.Item> */}
              {/* 여기까지 일단 보류.. dropdown 좀 더 공부해ㅠ */}

              {/* 아래는 input 형식 */}
              <Form.Item required label="Investment Style">
                <Input
                  id="investStyle"
                  placeholder="Choose 단기투자 or 장기투자"
                  type="text"
                  value={values.investStyle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.investStyle && touched.investStyle ? 'text-input error' : 'text-input'
                  }
                />
                {errors.investStyle && touched.investStyle && (
                  <div className="input-feedback">{errors.investStyle}</div>
                )}
              </Form.Item>

              <Form.Item required label="Invest Preference">
                <Input
                  id="investPrefer"
                  placeholder="Choose E, S, G, or P"
                  type="text"
                  value={values.investPrefer}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.investPrefer && touched.investPrefer ? 'text-input error' : 'text-input'
                  }
                />
                {errors.investPrefer && touched.investPrefer && (
                  <div className="input-feedback">{errors.investPrefer}</div>
                )}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};


export default RegisterPage
