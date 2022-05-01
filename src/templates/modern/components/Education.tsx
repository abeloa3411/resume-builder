import { EducationIntrf } from 'src/stores/index.interface';
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionSubtitle } from '../atoms/SectionSubtitle';
import { SectionTitle } from '../atoms/SectionTitle';

export const EducationSection = ({ education }: { education: EducationIntrf[] }) => {
  return (
    <div className="mb-3">
      <SectionHeading title="Education" />

      {education.map((item: EducationIntrf, index: number) => (
        <div key={index} className="py-3">
          <div>
            <SectionTitle label={`${item.studyType} - ${item.area}`} />
            <div className="flex justify-between items-center">
              <SectionSubtitle label={item.institution} />
              <div className="flex gap-3">
                <p className="text-xs">
                  {item.startDate} - {item.endDate}
                </p>
                {/* <p className="text-xs">60%</p> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};