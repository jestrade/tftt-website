import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// Auth Amplify
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../aws-exports'

// Styles
import '@styles/SignUpForm.scss'

// Images
import rapper from '@images/rapper.png'
import google from '@images/googlelogo.png'
import facebook from '@images/facebooklogo.png'
import icloud from '@images/icloudlogo.png'
// Icons
import arrowDown from '@icons/arrowDownSelect.png'

// Form Validation
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Form Schema
const schema = yup.object().shape({
  email: yup.string().email('Must be a valid email').required('Required'),
  password: yup.string().required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  indicative: yup.string(),
  phone: yup.string(),
  terms: yup.boolean().oneOf([true, null], 'You must agree to the terms and conditions.')
})

Amplify.configure(awsconfig)
Auth.configure(awsconfig)

const SignUpForm = () => {
  const [popUpTerms, setPopUpTerms] = useState(false)
  const history = useHistory()
  // Functions
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmitHandler = async (data) => {
    try {
      const { user } = await Auth.signUp({
        username: data.email,
        password: data.password
      })
      console.log(user)
      if (user) {
        history.push({
          pathname: '/pop',
          state: {
            email: data.email
          }
        })
      }
      // return user
    } catch (error) {
      console.log('error signing up:', error)
    }
  }

  return (
    <div className='signupFormContainer'>
      <div className='signupFormSubcontainer'>
        <img src={rapper} alt='Rapper' />
        <div className='signupform'>
          <h1>Step into the trap</h1>
          <p>
            Register to be part of the team, in TALES FROM THE TRAP you can
            upload your own videos and get special VIP treatment for registering.
          </p>
          <hr />
          <form className='formMain' onSubmit={handleSubmit(onSubmitHandler)} noValidate>
            <label>Email Address*</label>
            <input {...register('email')} className='formMainInput' type='email' placeholder='Enter email address' />
            {errors.email?.message && <p role='alert'>{errors.email?.message}</p>}
            <label>Create Password*</label>
            <input {...register('password')} className='formMainInput' type='password' placeholder='Password' />
            {errors.password?.message && <p role='alert'>{errors.password?.message}</p>}
            <label>Repeat Password*</label>
            <input {...register('passwordConfirmation')} className='formMainInput' type='password' placeholder='Repeat password' />
            {errors.passwordConfirmation?.message && <p role='alert'>{errors.passwordConfirmation?.message}</p>}
            <label>Phone Number</label>
            <div className='phoneDiv'>
              <select {...register('indicative')}>
                <option data-countrycode='GB' value='44' defaultValue>(+44) UK</option>
                <option data-countrycode='DZ' value='213'>(+213) Algeria</option>
                <option data-countrycode='AD' value='376'>(+376) Andorra</option>
                <option data-countrycode='AO' value='244'>(+244) Angola</option>
                <option data-countrycode='AI' value='1264'>(+1264) Anguilla</option>
                <option data-countrycode='AG' value='1268'>(+1268) Antigua &amp; Barbuda</option>
                <option data-countrycode='AR' value='54'>(+54) Argentina</option>
                <option data-countrycode='AM' value='374'>(+374) Armenia</option>
                <option data-countrycode='AW' value='297'>(+297) Aruba</option>
                <option data-countrycode='AU' value='61'>(+61) Australia</option>
                <option data-countrycode='AT' value='43'>(+43) Austria</option>
                <option data-countrycode='AZ' value='994'>(+994) Azerbaijan</option>
                <option data-countrycode='BS' value='1242'>(+1242) Bahamas</option>
                <option data-countrycode='BH' value='973'>(+973) Bahrain</option>
                <option data-countrycode='BD' value='880'>(+880) Bangladesh</option>
                <option data-countrycode='BB' value='1246'>(+1246) Barbados</option>
                <option data-countrycode='BY' value='375'>(+375) Belarus</option>
                <option data-countrycode='BE' value='32'>(+32) Belgium</option>
                <option data-countrycode='BZ' value='501'>(+501) Belize</option>
                <option data-countrycode='BJ' value='229'>(+229) Benin</option>
                <option data-countrycode='BM' value='1441'>(+1441) Bermuda</option>
                <option data-countrycode='BT' value='975'>(+975) Bhutan</option>
                <option data-countrycode='BO' value='591'>(+591) Bolivia</option>
                <option data-countrycode='BA' value='387'>(+387) Bosnia Herzegovina</option>
                <option data-countrycode='BW' value='267'>(+267) Botswana</option>
                <option data-countrycode='BR' value='55'>(+55) Brazil</option>
                <option data-countrycode='BN' value='673'>(+673) Brunei</option>
                <option data-countrycode='BG' value='359'>(+359) Bulgaria</option>
                <option data-countrycode='BF' value='226'>(+226) Burkina Faso</option>
                <option data-countrycode='BI' value='257'>(+257) Burundi</option>
                <option data-countrycode='KH' value='855'>(+855) Cambodia</option>
                <option data-countrycode='CM' value='237'>(+237) Cameroon</option>
                <option data-countrycode='CA' value='1'>(+1) Canada</option>
                <option data-countrycode='CV' value='238'>(+238) Cape Verde Islands</option>
                <option data-countrycode='KY' value='1345'>(+1345) Cayman Islands</option>
                <option data-countrycode='CF' value='236'>(+236) Central African Republic</option>
                <option data-countrycode='CL' value='56'>(+56) Chile</option>
                <option data-countrycode='CN' value='86'>(+86) China</option>
                <option data-countrycode='CO' value='57'>(+57) Colombia</option>
                <option data-countrycode='KM' value='269'>(+269) Comoros</option>
                <option data-countrycode='CG' value='242'>(+242) Congo</option>
                <option data-countrycode='CK' value='682'>(+682) Cook Islands</option>
                <option data-countrycode='CR' value='506'>(+506) Costa Rica</option>
                <option data-countrycode='HR' value='385'>(+385) Croatia</option>
                <option data-countrycode='CU' value='53'>(+53) Cuba</option>
                <option data-countrycode='CY' value='90392'>(+90392) Cyprus North</option>
                <option data-countrycode='CY' value='357'>(+357) Cyprus South</option>
                <option data-countrycode='CZ' value='42'>(+42) Czech Republic</option>
                <option data-countrycode='DK' value='45'>(+45) Denmark</option>
                <option data-countrycode='DJ' value='253'>(+253) Djibouti</option>
                <option data-countrycode='DM' value='1809'>(+1809) Dominica</option>
                <option data-countrycode='DO' value='1809'>(+1809) Dominican Republic</option>
                <option data-countrycode='EC' value='593'>(+593) Ecuador</option>
                <option data-countrycode='EG' value='20'>(+20) Egypt</option>
                <option data-countrycode='SV' value='503'>(+503) El Salvador</option>
                <option data-countrycode='GQ' value='240'>(+240) Equatorial Guinea</option>
                <option data-countrycode='ER' value='291'>(+291) Eritrea</option>
                <option data-countrycode='EE' value='372'>(+372) Estonia</option>
                <option data-countrycode='ET' value='251'>(+251) Ethiopia</option>
                <option data-countrycode='FK' value='500'>(+500) Falkland Islands</option>
                <option data-countrycode='FO' value='298'>(+298) Faroe Islands</option>
                <option data-countrycode='FJ' value='679'>(+679) Fiji</option>
                <option data-countrycode='FI' value='358'>(+358) Finland</option>
                <option data-countrycode='FR' value='33'>(+33) France</option>
                <option data-countrycode='GF' value='594'>(+594) French Guiana</option>
                <option data-countrycode='PF' value='689'>(+689) French Polynesia</option>
                <option data-countrycode='GA' value='241'>(+241) Gabon</option>
                <option data-countrycode='GM' value='220'>(+220) Gambia</option>
                <option data-countrycode='GE' value='7880'>(+7880) Georgia</option>
                <option data-countrycode='DE' value='49'>(+49) Germany</option>
                <option data-countrycode='GH' value='233'>(+233) Ghana</option>
                <option data-countrycode='GI' value='350'>(+350) Gibraltar</option>
                <option data-countrycode='GR' value='30'>(+30) Greece</option>
                <option data-countrycode='GL' value='299'>(+299) Greenland</option>
                <option data-countrycode='GD' value='1473'>(+1473) Grenada</option>
                <option data-countrycode='GP' value='590'>(+590) Guadeloupe</option>
                <option data-countrycode='GU' value='671'>(+671) Guam</option>
                <option data-countrycode='GT' value='502'>(+502) Guatemala</option>
                <option data-countrycode='GN' value='224'>(+224) Guinea</option>
                <option data-countrycode='GW' value='245'>(+245) Guinea - Bissau</option>
                <option data-countrycode='GY' value='592'>(+592) Guyana</option>
                <option data-countrycode='HT' value='509'>(+509) Haiti</option>
                <option data-countrycode='HN' value='504'>(+504) Honduras</option>
                <option data-countrycode='HK' value='852'>(+852) Hong Kong</option>
                <option data-countrycode='HU' value='36'>(+36) Hungary</option>
                <option data-countrycode='IS' value='354'>(+354) Iceland</option>
                <option data-countrycode='IN' value='91'>(+91) India</option>
                <option data-countrycode='ID' value='62'>(+62) Indonesia</option>
                <option data-countrycode='IR' value='98'>(+98) Iran</option>
                <option data-countrycode='IQ' value='964'>(+964) Iraq</option>
                <option data-countrycode='IE' value='353'>(+353) Ireland</option>
                <option data-countrycode='IL' value='972'>(+972) Israel</option>
                <option data-countrycode='IT' value='39'>(+39) Italy</option>
                <option data-countrycode='JM' value='1876'>(+1876) Jamaica</option>
                <option data-countrycode='JP' value='81'>(+81) Japan</option>
                <option data-countrycode='JO' value='962'>(+962) Jordan</option>
                <option data-countrycode='KZ' value='7'>(+7) Kazakhstan</option>
                <option data-countrycode='KE' value='254'>(+254) Kenya</option>
                <option data-countrycode='KI' value='686'>(+686) Kiribati</option>
                <option data-countrycode='KP' value='850'>(+850) Korea North</option>
                <option data-countrycode='KR' value='82'>(+82) Korea South</option>
                <option data-countrycode='KW' value='965'>(+965) Kuwait</option>
                <option data-countrycode='KG' value='996'>(+996) Kyrgyzstan</option>
                <option data-countrycode='LA' value='856'>(+856) Laos</option>
                <option data-countrycode='LV' value='371'>(+371) Latvia</option>
                <option data-countrycode='LB' value='961'>(+961) Lebanon</option>
                <option data-countrycode='LS' value='266'>(+266) Lesotho</option>
                <option data-countrycode='LR' value='231'>(+231) Liberia</option>
                <option data-countrycode='LY' value='218'>(+218) Libya</option>
                <option data-countrycode='LI' value='417'>(+417) Liechtenstein</option>
                <option data-countrycode='LT' value='370'>(+370) Lithuania</option>
                <option data-countrycode='LU' value='352'>(+352) Luxembourg</option>
                <option data-countrycode='MO' value='853'>(+853) Macao</option>
                <option data-countrycode='MK' value='389'>(+389) Macedonia</option>
                <option data-countrycode='MG' value='261'>(+261) Madagascar</option>
                <option data-countrycode='MW' value='265'>(+265) Malawi</option>
                <option data-countrycode='MY' value='60'>(+60) Malaysia</option>
                <option data-countrycode='MV' value='960'>(+960) Maldives</option>
                <option data-countrycode='ML' value='223'>(+223) Mali</option>
                <option data-countrycode='MT' value='356'>(+356) Malta</option>
                <option data-countrycode='MH' value='692'>(+692) Marshall Islands</option>
                <option data-countrycode='MQ' value='596'>(+596) Martinique</option>
                <option data-countrycode='MR' value='222'>(+222) Mauritania</option>
                <option data-countrycode='YT' value='269'>(+269) Mayotte</option>
                <option data-countrycode='MX' value='52'>(+52) Mexico</option>
                <option data-countrycode='FM' value='691'>(+691) Micronesia</option>
                <option data-countrycode='MD' value='373'>(+373) Moldova</option>
                <option data-countrycode='MC' value='377'>(+377) Monaco</option>
                <option data-countrycode='MN' value='976'>(+976) Mongolia</option>
                <option data-countrycode='MS' value='1664'>(+1664) Montserrat</option>
                <option data-countrycode='MA' value='212'>(+212) Morocco</option>
                <option data-countrycode='MZ' value='258'>(+258) Mozambique</option>
                <option data-countrycode='MN' value='95'>(+95) Myanmar</option>
                <option data-countrycode='NA' value='264'>(+264) Namibia</option>
                <option data-countrycode='NR' value='674'>(+674) Nauru</option>
                <option data-countrycode='NP' value='977'>(+977) Nepal</option>
                <option data-countrycode='NL' value='31'>(+31) Netherlands</option>
                <option data-countrycode='NC' value='687'>(+687) New Caledonia</option>
                <option data-countrycode='NZ' value='64'>(+64) New Zealand</option>
                <option data-countrycode='NI' value='505'>(+505) Nicaragua</option>
                <option data-countrycode='NE' value='227'>(+227) Niger</option>
                <option data-countrycode='NG' value='234'>(+234) Nigeria</option>
                <option data-countrycode='NU' value='683'>(+683) Niue</option>
                <option data-countrycode='NF' value='672'>(+672) Norfolk Islands</option>
                <option data-countrycode='NP' value='670'>(+670) Northern Marianas</option>
                <option data-countrycode='NO' value='47'>(+47) Norway</option>
                <option data-countrycode='OM' value='968'>(+968) Oman</option>
                <option data-countrycode='PW' value='680'>(+680) Palau</option>
                <option data-countrycode='PA' value='507'>(+507) Panama</option>
                <option data-countrycode='PG' value='675'>(+675) Papua New Guinea</option>
                <option data-countrycode='PY' value='595'>(+595) Paraguay</option>
                <option data-countrycode='PE' value='51'>(+51) Peru</option>
                <option data-countrycode='PH' value='63'>(+63) Philippines</option>
                <option data-countrycode='PL' value='48'>(+48) Poland</option>
                <option data-countrycode='PT' value='351'>(+351) Portugal</option>
                <option data-countrycode='PR' value='1787'>(+1787) Puerto Rico</option>
                <option data-countrycode='QA' value='974'>(+974) Qatar</option>
                <option data-countrycode='RE' value='262'>(+262) Reunion</option>
                <option data-countrycode='RO' value='40'>(+40) Romania</option>
                <option data-countrycode='RU' value='7'>(+7) Russia</option>
                <option data-countrycode='RW' value='250'>(+250) Rwanda</option>
                <option data-countrycode='SM' value='378'>(+378) San Marino</option>
                <option data-countrycode='ST' value='239'>(+239) Sao Tome &amp; Principe</option>
                <option data-countrycode='SA' value='966'>(+966) Saudi Arabia</option>
                <option data-countrycode='SN' value='221'>(+221) Senegal</option>
                <option data-countrycode='CS' value='381'>(+381) Serbia</option>
                <option data-countrycode='SC' value='248'>(+248) Seychelles</option>
                <option data-countrycode='SL' value='232'>(+232) Sierra Leone</option>
                <option data-countrycode='SG' value='65'>(+65) Singapore</option>
                <option data-countrycode='SK' value='421'>(+421) Slovak Republic</option>
                <option data-countrycode='SI' value='386'>(+386) Slovenia</option>
                <option data-countrycode='SB' value='677'>(+677) Solomon Islands</option>
                <option data-countrycode='SO' value='252'>(+252) Somalia</option>
                <option data-countrycode='ZA' value='27'>(+27) South Africa</option>
                <option data-countrycode='ES' value='34'>(+34) Spain</option>
                <option data-countrycode='LK' value='94'>(+94) Sri Lanka</option>
                <option data-countrycode='SH' value='290'>(+290) St. Helena</option>
                <option data-countrycode='KN' value='1869'>(+1869) St. Kitts</option>
                <option data-countrycode='SC' value='1758'>(+1758) St. Lucia</option>
                <option data-countrycode='SD' value='249'>(+249) Sudan</option>
                <option data-countrycode='SR' value='597'>(+597) Suriname</option>
                <option data-countrycode='SZ' value='268'>(+268) Swaziland</option>
                <option data-countrycode='SE' value='46'>(+46) Sweden</option>
                <option data-countrycode='CH' value='41'>(+41) Switzerland</option>
                <option data-countrycode='SI' value='963'>(+963) Syria</option>
                <option data-countrycode='TW' value='886'>(+886) Taiwan</option>
                <option data-countrycode='TJ' value='7'>(+7) Tajikstan</option>
                <option data-countrycode='TH' value='66'>(+66) Thailand</option>
                <option data-countrycode='TG' value='228'>(+228) Togo</option>
                <option data-countrycode='TO' value='676'>(+676) Tonga</option>
                <option data-countrycode='TT' value='1868'>(+1868) Trinidad &amp; Tobago</option>
                <option data-countrycode='TN' value='216'>(+216) Tunisia</option>
                <option data-countrycode='TR' value='90'>(+90) Turkey</option>
                <option data-countrycode='TM' value='7'>(+7) Turkmenistan</option>
                <option data-countrycode='TM' value='993'>(+993) Turkmenistan</option>
                <option data-countrycode='TC' value='1649'>(+1649) Turks &amp; Caicos Islands</option>
                <option data-countrycode='TV' value='688'>(+688) Tuvalu</option>
                <option data-countrycode='UG' value='256'>(+256) Uganda</option>
                <option data-countrycode='GB' value='44'>(+44) UK</option>
                <option data-countrycode='UA' value='380'>(+380) Ukraine</option>
                <option data-countrycode='AE' value='971'>(+971) United Arab Emirates</option>
                <option data-countrycode='UY' value='598'>(+598) Uruguay</option>
                <option data-countrycode='US' value='1'>(+1) USA</option>
                <option data-countrycode='UZ' value='7'>(+7) Uzbekistan</option>
                <option data-countrycode='VU' value='678'>(+678) Vanuatu</option>
                <option data-countrycode='VA' value='379'>(+379) Vatican City</option>
                <option data-countrycode='VE' value='58'>(+58) Venezuela</option>
                <option data-countrycode='VN' value='84'>(+84) Vietnam</option>
                <option data-countrycode='VG' value='84'>(+1284) Virgin Islands - British</option>
                <option data-countrycode='VI' value='84'>(+1340) Virgin Islands - US</option>
                <option data-countrycode='WF' value='681'>(+681) Wallis &amp; Futuna</option>
                <option data-countrycode='YE' value='969'>(+969) Yemen (North)</option>
                <option data-countrycode='YE' value='967'>(+967) Yemen (South)</option>
                <option data-countrycode='ZM' value='260'>(+260) Zambia</option>
                <option data-countrycode='ZW' value='263'>(+263) Zimbabwe</option>
              </select>
              <div className='icon-select'>
                <img src={arrowDown} alt='' />
              </div>
              <input {...register('phone')} className='phoneInput' type='tel' />
            </div>
            <div className='radioContainer'>
              <input {...register('terms')} type='checkbox' />
              <label htmlFor='terms' style={{ cursor: 'pointer' }} onClick={() => setPopUpTerms(true)}>I agree to terms &amp; conditions</label>
            </div>
            {errors.terms?.message && <p role='alert'>{errors.terms?.message}</p>}
            <button type='submit'>Register Account</button>
          </form>
          <div className='otherOptions'>
            <hr />
            <a href='#'>Or register with</a>
            <hr />
          </div>
          <div className='logosButtons' style={{ display: 'none' }}>
            <a href='#'><img src={google} alt='Google Logo' /></a>
            <a href='#'><img src={facebook} alt='Facebook Logo' /></a>
            <a href='#'><img src={icloud} alt='icloud logo' /></a>
          </div>
        </div>
      </div>
      <div className='pop-up-terms' style={popUpTerms ? { display: 'block' } : { display: 'none' }}>
        <div className='box-pop-up'>
          <div className='button-closed'> <p onClick={() => setPopUpTerms(false)}> X</p></div>
          <h1>TERMS AND CONDITIONS</h1>
          <div className='text-box'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolores voluptates similique quaerat autem quis ab, et accusamus
            nam totam molestiae deleniti iure fugit cumque reprehenderit
            praesentium. Ratione labore quia reprehenderit!
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolores voluptates similique quaerat autem quis ab, et accusamus
            nam totam molestiae deleniti iure fugit cumque reprehenderit
            praesentium. Ratione labore quia reprehenderit!
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolores voluptates similique quaerat autem quis ab, et accusamus
            nam totam molestiae deleniti iure fugit cumque reprehenderit
            praesentium. Ratione labore quia reprehenderit!
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolores voluptates similique quaerat autem quis ab, et accusamus
            nam totam molestiae deleniti iure fugit cumque reprehenderit
            praesentium. Ratione labore quia reprehenderit!
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?
            Cupiditate reprehenderit fugiat minus atque explicabo quidem
            voluptate vero tenetur quaerat soluta magni itaque aperiam
            voluptatem deserunt officiis placeat id, repellat ea omnis architecto,
            voluptatum veniam molestiae aliquid? Laudantium, cupiditate?

          </div>
          <div className='button-terms'>
            <button onClick={() => setPopUpTerms(false)}> I agree </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUpForm
