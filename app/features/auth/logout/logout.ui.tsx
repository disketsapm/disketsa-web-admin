import { Form, useNavigation } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { DropdownMenuItem } from "~/components/ui/dropdown-menu";

const Logout = () => {
  const navigation = useNavigation();

  return (
    <Form method="POST" action="/?index">
      <DropdownMenuItem className="p-0">
        <Button
          className="w-full"
          type="submit"
          isLoading={navigation.state === "submitting"}
        >
          Logout
        </Button>
      </DropdownMenuItem>
    </Form>
  );
};

export default Logout;
