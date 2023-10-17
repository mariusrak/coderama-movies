import React, { useState } from "react";
import { Container } from "@bootstrap-styled/v4";
import {
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Option,
  Button,
} from "@bootstrap-styled/v4";

import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useParams,
} from "react-router-dom";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (search) {
      navigate(`/search/${search}`);
    }
    return false;
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label htmlFor="inline-form-input">Movie search</Label>
        <Input
          placeholder="Find your movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FormGroup>
      <Button color="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

const ResultsPage = () => {
  const params = useParams();
  return (
    <>
      <SearchPage />
      Results for {params.search}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/search/:search",
    element: <ResultsPage />,
  },
]);

const App = () => (
  <Container>
    <RouterProvider router={router} />
  </Container>
);
export default App;
