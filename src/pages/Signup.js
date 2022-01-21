import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { BACKEND } from "../Config/Service/Constants";
const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-6/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-4 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-6`;

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

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Select = tw.select`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Option = styled.option`
  color: #6b7280;
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
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;
const Signup = (
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Sign Up For Court Law",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign Up With Google",
      url: "https://google.com",
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign Up With Twitter",
      url: "https://twitter.com",
    },
  ],
  submitButtonText = "Sign Up",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "/TermsOfServicePage",
  privacyPolicyUrl = "/PrivacyPolicyPage",
  signInUrl = "/LoginPage"
) => {
  const [formData, setformData] = useState({});
  // useEffect(() => {
  //   alert("alert");
  // }, []);

  const handleChange = (e) => {
    // alert("ik");
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
    console.log(name, value);
  };

  const submitIt = async () => {
    // console.log(formData);
    try {
      alert("sending it");
      const data = await axios.post(`${BACKEND}/signup`, formData);
      alert("sent");
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  // const submitIt = async () => {
  //   try {
  //     axios
  //       .post(`${BACKEND}/signup`, { formData })
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer>
            {/* <LogoLink href={logoLinkUrl}> */}
            <LogoLink>
              <LogoImage src={logo} />
            </LogoLink>
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
                  <Input
                    onChange={(e) => handleChange(e)}
                    name="firstName"
                    value={formData.firstName}
                    required
                    type="text"
                    placeholder="First Name"
                  />
                  <Input
                    required
                    onChange={(e) => handleChange(e)}
                    name="lastName"
                    value={formData.lastName}
                    type="text"
                    placeholder="Last Name"
                  />
                  <Input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="companyName"
                    value={formData.companyName}
                    placeholder="Company Name"
                  />
                  <Input
                    required
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="userName"
                    value={formData.userName}
                    placeholder="username"
                  />
                  <Input
                    onChange={(e) => handleChange(e)}
                    name="email"
                    value={formData.email}
                    required
                    type="email"
                    placeholder="Email"
                  />
                  <Select
                    onChange={(e) => handleChange(e)}
                    name="category"
                    style={{ color: "#9CA3AF" }}
                  >
                    <Option value="null">Select Category</Option>
                    <Option value="Attorney">Attorney</Option>
                    <Option value="Vendor">Vendor</Option>
                    <Option value="Consumer">Consumer</Option>
                  </Select>
                  <Input
                    onChange={(e) => handleChange(e)}
                    name="password"
                    value={formData.password}
                    required
                    type="password"
                    placeholder="Password"
                  />

                  <p tw="mt-6 text-xs text-gray-600 text-center">
                    <Radioinput required type="radio" />I agree to abide by
                    court law's{" "}
                    <a
                      href={tosUrl}
                      tw="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </a>{" "}
                    and its{" "}
                    <a
                      href={privacyPolicyUrl}
                      tw="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policyd
                    </a>
                  </p>

                  {/* <SubmitButton type="submit" onClick={submitIt}> */}
                  <SubmitButton onClick={submitIt}>
                    <SubmitButtonIcon className="icon" />
                    {/* <a
                      // href={signInUrl}
                      tw="border-b border-gray-500 border-dotted"
                    > */}
                    {submitButtonText}
                    {/* </a> */}
                  </SubmitButton>
                  <button type="button" onClick={submitIt}>
                    Submit
                  </button>
                  <p tw="mt-8 text-sm text-gray-600 text-center">
                    Already have an account?{" "}
                    <a
                      href={signInUrl}
                      tw="border-b border-gray-500 border-dotted"
                    >
                      Login
                    </a>
                  </p>
                </Form>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};
export default Signup;
