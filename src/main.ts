import { isAxiosError } from "axios";

async function run (): Promise<void> {
  // Here you can put calls to your script functions to test them.
}

run().catch((error: unknown) => {
  if (isAxiosError(error)) {
    console.error(error.response?.data);
  }
  console.error(error)
})