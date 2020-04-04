import React from "react";
import {Header, Segment, Input, Icon} from "semantic-ui-react";

const MessagesHeader = ({displayNameChannel, numUniqueUsers}) => {
    return (
        <Segment clearing>
            {/* Channel Title */}
            <Header fluid="true" as="h2" floated="left" style={{marginBottom: 0}}>
          <span>
              {displayNameChannel}
              <Icon name={"star outline"} color="black"/>
          </span>
                <Header.Subheader>{numUniqueUsers}</Header.Subheader>
            </Header>

            {/* Channel Search Input */}
            <Header floated="right">
                <Input
                    size="mini"
                    icon="search"
                    name="searchTerm"
                    placeholder="Search Messages"
                />
            </Header>
        </Segment>
    )
}
export default MessagesHeader