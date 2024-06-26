import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { PencilLine } from 'lucide-react';
  import { Button } from "./ui/button";
  const users = [
    {
        avatar: "",
        Owner: "Mirza Usman",
        username: "usman",
        loginKey: "4628734623",
    }
  ]
  
  export function TableDemo() {
    return (
      <Table className="overflow-auto h-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Avatar</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Login Key</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-red">
          {users.map((user) => (
            <TableRow key={user.username}>
              <TableCell>
                <div className="avatar w-[35px] h-[35px] bg-zinc-300 rounded-full">
                {user.avatar}
                </div>
                </TableCell>
              <TableCell>{user.Owner}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.loginKey}</TableCell>
              <TableCell><Button variant="outline"><PencilLine size={18} color="grey"/></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  