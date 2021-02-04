import React from "react";
import "@patternfly/react-core/dist/styles/base.css";
import "./app.css";
import {
  Brand,
  Button,
  Card,
  CardActions,
  CardHeaderMain,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter,
  Gallery,
  GalleryItem,
  Text,
  TextContent,
  TextVariants
} from "@patternfly/react-core";
import { TimesIcon } from "@patternfly/react-icons";
import AppPage from "./components/page";

class PageLayoutSimpleNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <AppPage>
          <Gallery hasGutter>
            {Array.apply(0, Array(9)).map((x, i) => (
              <GalleryItem key={i}>
                <Card isHoverable isSelectable>
                  <CardHeader>
                    <CardHeaderMain>
                      <Brand
                        src="https://pf4.patternfly.org/assets/images/pf-logo-small.svg"
                        alt="Patternfly Logo"
                      />
                    </CardHeaderMain>
                    <CardActions>
                      <Button variant="plain">
                        <TimesIcon />
                      </Button>
                    </CardActions>
                  </CardHeader>
                  <CardTitle>
                    <Text component={TextVariants.p}>PatternFly</Text>
                    <TextContent>
                      <Text component={TextVariants.small}>
                        Provided by Red Hat
                      </Text>
                    </TextContent>
                  </CardTitle>
                  <CardBody>
                    PatternFly is an open source design system created to enable
                    consistency and usability across a wide range of
                    applications and use cases. PatternFly provides clear
                    standards, guidance, and tools that help designers and
                    developers work together more efficiently and build better
                    user experiences.
                  </CardBody>
                  <CardFooter>
                    <Button variant="link" isInline>
                      Link to PatternFly
                    </Button>
                  </CardFooter>
                </Card>
              </GalleryItem>
            ))}
          </Gallery>
        </AppPage>
      </React.Fragment>
    );
  }
}

export default PageLayoutSimpleNav;
