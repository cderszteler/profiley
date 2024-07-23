import {parseItemToProfile} from "@/lib/profiles";
import {ProfileCard} from "@/components/card/ProfileCard";
import React from "react";
import {dynamo, tableName} from "@/lib/database";
import {GetCommand} from "@aws-sdk/lib-dynamodb";
import {notFound} from "next/navigation";

export default async function ProfilePage({ params }: { params: { handle: string }}) {
  const response = await dynamo.send(new GetCommand({
    TableName: tableName,
    Key: {
      Handle: params.handle
    }
  }))
  const item = response.Item
  const profile = item && parseItemToProfile(item)

  if (!profile) {
    notFound()
  }

  return (
    <ProfileCard profile={profile}/>
  )
}