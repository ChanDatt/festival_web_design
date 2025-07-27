import StaticPageLayout from "../../components/StaticPageLayout/StaticPageLayout";
import layoutStyles from "../../components/StaticPageLayout/StaticPageLayout.module.css";

function CharityPage() {
  return (
    <StaticPageLayout title="Charity">
      <div className={layoutStyles.textContent}>
        <p>
          At The Color Run, we are all about spreading the LOVE. We feel that it
          is important to highlight meaningful causes, connect with the
          community, and to GIVE BACK!
          <br></br>
          If you are interested in volunteering OR if you have a charity you
          would like to nominate, please fill out the information below. You can
          also email us at
          <a href="mailto:charity@thecolorrun.com">charity@thecolorrun.com</a>
          <br></br>
          We look forward to hearing from you!
        </p>
      </div>
    </StaticPageLayout>
  );
}

export default CharityPage;
