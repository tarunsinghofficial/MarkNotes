import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2 space-y-20">
      <section className="container flex flex-col items-center mx-auto mt-10">
        <div className="space-y-4 w-[60%]">
          <h2 className="text-md text-center text-gray-400">MarkNotes</h2>
          <p className="md:text-4xl lg:text-6xl text-3xl font-bold text-center text-black">
            A simple note-taking app that supports Markdown
          </p>
          <h3 className="md:text-md lg:text-lg text-sm text-center text-gray-500">
            Organize your thoughts, collaborate effortlessly, and store your
            notes securely in one place
          </h3>
          <div className="flex justify-center space-x-4">
            <Button color="primary" variant="flat" href="/dashboard">
              Get Started
            </Button>
            <Button variant="bordered">Learn More</Button>
          </div>
        </div>
      </section>
      <section className="container flex items-center justify-center mx-auto mt-10">
        <Image
          src="https://cdn.dribbble.com/userupload/10391793/file/original-775ab40661445113afae477ea37882d7.jpg"
          alt="Notes"
          width={1000}
          height={1000}
          className="rounded-2xl object-contain"
        />
      </section>
    </div>
  );
}
