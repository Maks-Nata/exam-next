import { UserComponent } from "@/components/UserComponent";
import { IUser } from "@/models/user";
import { FC } from "react";
import {SearchParams} from "next/dist/server/request/search-params";

type Props={
    params:Promise<{id:string}>;
    searchParams:Promise<SearchParams>
}



const UserPage: FC<Props> =async ({searchParams}) => {

    let user:IUser|null=null
    const{data}=await searchParams
    if (typeof data==='string'){
        user=JSON.parse(data) as IUser
      }

    return (
        <UserComponent user={user}/>
    );
};

export default UserPage;
