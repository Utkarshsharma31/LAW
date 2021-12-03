import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/law_first-removebg-preview.png";
import logo from "images/logo-removebg-preview.png";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-6/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-0 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-6`;
const FormContainer2 = tw.div`w-full flex-1 `;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-lg`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Select = tw.select`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Option = styled.option`
color:#6B7280;
`;

const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const Radioinput = styled.input`
margin-right: 0.5rem;
    margin-top: 1rem;
`;

const BreakLine= styled.div`
height: 42rem;
    color: black;
    border: 1px solid #9CA3AF;
    margin-top: 5rem;
`;
const TextArea = tw.textarea`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Profile",
  submitButtonText = "Submit",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "/TermsOfServicePage",
  privacyPolicyUrl = "/PrivacyPolicyPage",
  signInUrl = "/Auser"
}) => (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              {/* <SocialButtonsContainer>
                {socialButtons.map((socialButton, index) => (
                  <SocialButton key={index} href={socialButton.url}>
                    <span className="iconContainer">
                      <img src={socialButton.iconImageSrc} className="icon" alt="" />
                    </span>
                    <span className="text">{socialButton.text}</span>
                  </SocialButton>
                ))}
              </SocialButtonsContainer>
              <DividerTextContainer>
                <DividerText>Or Sign up with your e-mail</DividerText>
              </DividerTextContainer> */}
              <Form>
                <Input required type="text" placeholder="First Name" />
                <Input required type="text" placeholder="Last Name" />
                <Input  type="text" placeholder="Company Name" />
                <Input required type="email" placeholder="Email" />
                <Input required type="password" placeholder="Password" />
                <Select style={{color : "#9CA3AF"}} >
                <Option value="A">Select City</Option>
                  <Option value="A">Attorney</Option>
                  <Option value="B">Vendor</Option>
                  <Option value="C">Consumer</Option>
                </Select>
                <Select style={{color : "#9CA3AF"}} >
                <Option value="A">Select State</Option>
                  <Option value="A">Attorney</Option>
                  <Option value="B">Vendor</Option>
                  <Option value="C">Consumer</Option>
                </Select>
                <Select style={{color : "#9CA3AF"}} >
                <Option value="A">Select Country</Option>
                  <Option value="A">Attorney</Option>
                  <Option value="B">Vendor</Option>
                  <Option value="C">Consumer</Option>
                </Select>
                <Input required type="number" placeholder="Postal Code" />

              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <BreakLine></BreakLine>
        <FormContainer2 style={{marginTop : "7.3rem"}}>
              <Form>

              <Input required type="text" placeholder="Bar State and Number" />
                <Input type="tel" id="phone" name="phone" placeholder="123-45-678"   />
                <Input type="tel" id="phone" name="phone" placeholder="Fax Number"   />
                <Select style={{color : "#9CA3AF"}} >
                <Option value="A">Select Language</Option>
                  <Option value="A">English</Option>
                  <Option value="B">Spanish</Option>
                  <Option value="C">German</Option>
                </Select>
                <Input required type="text" placeholder="Education" />
                <TextArea  type="text" placeholder="Experience" ></TextArea>
                <p tw="mt-6 mb-12 text-xs text-gray-600 text-center">
                <Radioinput required type="radio"  />
                  I agree to abide by court law's{" "}
                  <a href={tosUrl} tw="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>{" "}
                  and its{" "}
                  <a href={privacyPolicyUrl} tw="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>

                <SubmitButton type="submit">
                  <SubmitButtonIcon className="icon" />
                  <a href={signInUrl} tw="border-b border-gray-500 border-dotted">
                      Submit
                      </a>
                </SubmitButton>
              </Form>
            </FormContainer2>
      </Content>
    </Container>
  </AnimationRevealPage>
);
