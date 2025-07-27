import StaticPageLayout from "../../components/StaticPageLayout/StaticPageLayout";
import layoutStyles from "../../components/StaticPageLayout/StaticPageLayout.module.css";

function PrivacyPolicyPage() {
  return (
    <StaticPageLayout title="privacy<br>policy">
      <div className={layoutStyles.textContent}>
        <div>
          <h3>WHAT INFORMATION DO WE COLLECT?</h3>
          <p>
            We collect information from you when you register for an event,
            respond to a survey, join our VIP list or fill out a form on our
            website. When ordering or registering on our site, as appropriate,
            you may be asked to enter your: name, e-mail address, mailing
            address, phone number or credit card information. You may, however,
            visit our site anonymously.
          </p>
        </div>

        <div>
          <h3>WHAT DO WE USE YOUR INFORMATION FOR?</h3>
          <p>
            Any of the information we collect from you may be used in one of the
            following ways:
          </p>
          <ul>
            <li>
              <strong>To personalize your experience</strong> (your information
              helps us to better respond to your individual needs)
            </li>
            <li>
              <strong>To improve our website</strong> (we continually strive to
              improve our website offerings based on the information and
              feedback we receive from you)
            </li>
            <li>
              <strong>To improve customer service</strong> (your information
              helps us to more effectively respond to your customer service
              requests and support needs)
            </li>
            <li>
              <strong>To process transactions</strong> Your information, whether
              public or private, will not be sold, exchanged, transferred, or
              given to any other company for any reason whatsoever, without your
              consent, other than for the express purpose of delivering the
              purchased product or service requested.
            </li>
            <li>
              <strong>
                To administer a contest, promotion, survey or other site feature
              </strong>
            </li>
            <li>
              <strong>To send periodic emails</strong> The email address you
              provide for order processing, may be used to send you information
              and updates pertaining to your order, in addition to receiving
              occasional company news, updates, related product or service
              information, etc. Note: If at any time you would like to
              unsubscribe from receiving future emails, we include detailed
              unsubscribe instructions at the bottom of each email.
            </li>
          </ul>
        </div>

        <div>
          <h3>HOW DO WE PROTECT YOUR INFORMATION?</h3>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information when you place an order or enter,
            submit, or access your personal information. We offer the use of a
            secure server. All supplied sensitive/credit information is
            transmitted via Secure Socket Layer (SSL) technology and then
            encrypted into our Payment gateway providers database only to be
            accessible by those authorized with special access rights to such
            systems, and are required to?keep the information confidential.
            After a transaction, your private information (credit cards, social
            security numbers, financials, etc.) will not be stored on our
            servers
          </p>
        </div>

        <div>
          <h3>DO WE USE COOKIES?</h3>
          <p>
            Yes. Cookies are small files that a site or its service provider
            transfers to your computers hard drive through your Web browser (if
            you allow) that enables the sites or service providers systems to
            recognize your browser and capture and remember certain information.
            We use cookies to help us remember and process the items in your
            shopping cart, understand and save your preferences for future
            visits and compile aggregate data about site traffic and site
            interaction so that we can offer better site experiences and tools
            in the future. We also may use DART cookies for ad serving through
            Google's DoubleClick, The DART cookies may also be used by us for ad
            serving through Google's DoubleClick, which places a cookie on your
            computer when you are browsing the web and visit a site using
            DoubleClick advertising (including some Google AdSense
            advertisements). The cookie is used to serve your specific ads and
            your interests ("interest based targeting" ). The ads served are to
            be targeted on the basis of your previous browsing history (For
            example, if you are viewing sites for visiting Las Vegas, you may
            also see Las Vegas hotel advertisements when viewing a non-related
            site, such as a hockey site). DART uses "non personally identifiable
            information" , which does NOT track your personal information, such
            as your name, email address, physical address, telephone number,
            social security numbers, bank account numbers or credit card
            numbers.If you would like to "opt out" of receiving online
            advertisements from us, please follow the instructions on the links
            below:
            <br />
            <a
              href="https://support.google.com/ads/answer/2662922?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://support.google.com/ads/answer/2662922?hl=en
            </a>
            <br />
            <a
              href="http://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.aboutads.info/choices/
            </a>
          </p>
        </div>

        <div>
          <h3>DO WE DISCLOSE ANY INFORMATION TO OUTSIDE PARTIES?</h3>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your
            personally identifiable information except as set forth in the
            Privacy Policy. We share end-user data with Major League Baseball
            Properties, Inc. and MLB Advanced Media, L.P., for Washington DC in
            2018. We also disclose personally identifiable information to
            trusted third parties who assist us in operating our website,
            conducting our business, or servicing you, so long as those parties
            agree to keep this information confidential. We may also release
            your information when we believe release is appropriate to comply
            with the law, enforce our site policies, or protect ours or others
            rights, property, or safety. However, non-personally identifiable
            visitor information may be provided to other parties for marketing,
            advertising, or other uses.
          </p>
        </div>
      </div>
    </StaticPageLayout>
  );
}

export default PrivacyPolicyPage;
