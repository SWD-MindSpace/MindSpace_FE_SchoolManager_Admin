// Define customized types
import { AccountTable } from "@/features/accounts/common/schemas/AccountTableSchema";
import { QuestionTableData } from "@/features/questions/schemas";
import { ArticleTableData } from "@/features/resources/articles/schemas/articleTableDataSchema";
import { BlogTableData } from "@/features/resources/blogs/schemas/blogTableDataSchema";
import { SupportingProgramTableData } from "@/features/supporting-programs/schemas/supportingProgramTableDataSchema";
import { TestTableData } from "@/features/tests/schemas/testTableDataSchema";
import { ZodIssue } from "zod";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export type ActionResult<T> =
    { status: 'success', data: T } | { status: 'error', error: string | ZodIssue[] }

export type TableData = TestTableData | QuestionTableData | ArticleTableData | SupportingProgramTableData | BlogTableData | AccountTableData

// types.ts
export interface TimeSlot {
    id: number;
    startTime: string;
    endTime: string;
    date: string;
    psychologistId: number;
    status: number;
}

export interface PsychologistSchedule {
    psychologistId: number;
    date: string;
    weekDay: string;
    timeSlots: TimeSlot[];
}
