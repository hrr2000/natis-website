import { useLabelContext } from "../contexts/LabelProvider";

export default function useGetFieldLabel(fieldName: string): string {
  const labels = useLabelContext();

  return labels[fieldName];
}
