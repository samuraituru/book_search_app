import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">書籍情報検索システム</h1>
      <Link href="/login">
        <Button className="mt-4">ログイン</Button>
      </Link>
    </div>
  );
}