import * as React from "react";
import { useQuery } from "@apollo/client";
import ReactHtmlParser from "react-html-parser";
import { Card, Col, Divider } from "antd";
import { GET_TEAM_MEMBERS } from "./queries";
import { TeamMember } from "./types";
import Loading from "../../Loading";

export default () => {
  const { loading, error, data } = useQuery(GET_TEAM_MEMBERS);

  if (loading) return <Loading />;
  if (error) {
    return (
      <span>
        Error!
        {error.message}
      </span>
    );
  }

  return <><Divider />{_renderTeamMembers(data.teamMembers)}<Divider /></>;
};

/* Render a Col containing a Card for each team member */
export function _renderTeamMembers(teamMembers: TeamMember[]) {
  return teamMembers.map((teamMember) => (
    <Col
      key={`col-team-member-${teamMember.name}`}
      xs={{ span: 12 }}
      lg={{ span: 8 }}
    >
      <Card
        key={teamMember.name}
        cover={
          <img
            key={`col-team-member-img-${teamMember.name}`}
            alt={teamMember.name}
            title={teamMember.name}
            src={teamMember.profileImage.url}
          />
        }
        style={{
          margin: "0 auto 1rem auto",
          maxWidth: `${teamMember.profileImage.width}px`,
          height: "100%",
        }}
        title={teamMember.name}
      >
        {ReactHtmlParser(teamMember.blurb.html)}
      </Card>
    </Col>
  ));
}
