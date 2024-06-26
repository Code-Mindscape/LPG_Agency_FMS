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
  import { Trash } from 'lucide-react';

  const users = [
    {
        avatar: "",
        Owner: "Mirza Usman",
        username: "usman",
        loginKey: "4628734623",
        role: "admin"
    },
    {
        avatar: "",
        Owner: "Asad Ali",
        username: "asad",
        loginKey: "3274898347",
        role: "editor"
    },
    {
        avatar: "",
        Owner: "Waqar Naeem",
        username: "Waqar",
        loginKey: "4628734623",
        role: "editor"
    },
    {
        avatar: "",
        Owner: "Mahnoor ",
        username: "mahnoor",
        loginKey: "4628734623",
        role: "updator"
    },
  ]
  
  export function TableDemo() {
    return (
      <Table className="overflow-auto w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Avatar</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Login Key</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="flex items-center justify-end">Actions</TableHead>
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
              <TableCell>{user.role}</TableCell>
              <TableCell className="flex gap-1 items-center justify-end">
                <Button size="icon" variant="outline"><PencilLine size={18} color="grey"/></Button>
                {/* <Button size="icon" variant="destructive"><Trash size={18} color="white"/></Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  