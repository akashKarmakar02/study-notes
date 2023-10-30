"use client";

import ConfirmModal from "@/components/modal/ConfirmModal";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function Banner({ documentId }: { documentId: Id<"documents"> }) {
  const router = useRouter();

  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  function onRemove() {
    const promise = remove({ id: documentId }).then(() => router.back());

    toast.promise(promise, {
      error: "Failed to delete note.",
      loading: "Deleting note...",
      success: "Note deleted!",
    });
  }

  function onRestore() {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      error: "Failed to restore note.",
      loading: "Restoring note...",
      success: "Note restored!",
    });
  }

  return (
    <div className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center">
      <p>This page is in Trash.</p>
      <Button
        size="sm"
        onClick={onRestore}
        variant="outline"
        className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
      >
        Restore page
      </Button>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size="sm"
          variant="outline"
          className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
        >
          Delete forever
        </Button>
      </ConfirmModal>
    </div>
  );
}

export default Banner;
