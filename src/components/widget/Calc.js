import WidgetActions from '../../actions/WidgetActions.js';
import WidgetStore from '../../stores/WidgetStore.js';
import {
  Button, Card, CardBody, CardFooter, CardHeader, Form, FormGroup, Input
} from 'reactstrap';
import React from 'react';

class Calc extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        form: {
          widgets: ''
        },
        validation: null
    }
    this.handleClickCalculatePacks = this.handleClickCalculatePacks.bind(this);
  }

  componentDidMount() {
    WidgetStore
    .on("click.calculate_packs", () => {
      // TODO ...
    });
  }

  handleClickCalculatePacks(e) {
    WidgetActions.clickCalculatePacks({
      widgets: e.target.elements.widgets.value
    });
    e.preventDefault();
  }

  render() {
    return (
      <Card>
        <CardHeader className="bg-white">
          <h5 className="text-center">Wally's Widget</h5>
        </CardHeader>
        <CardBody className="d-flex justify-content-center">
          <Form className="form" onSubmit={ (e) => this.handleClickCalculatePacks(e) }>
            { this.state.validation !== null ? <p className="text-danger">{this.state.validation}</p> : null }
            <FormGroup>
              <Input
                type="widgets"
                name="widgets"
                id="widgets"
                placeholder="How many widgets?"
                required
              />
            </FormGroup>
            <Button color="primary" block>Calculate packs</Button>
          </Form>
        </CardBody>
        <CardFooter className="text-muted">
          <p>Result here!</p>
        </CardFooter>
      </Card>
    );
  }
}

export { Calc };
