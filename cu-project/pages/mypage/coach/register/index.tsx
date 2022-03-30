import { useAuth } from "../../../../src/components/commons/hooks/useAuth";
import CoachingUsCoachRegister from "../../../../src/components/units/coachingus/coach-register/CoachingUsCoachRegister.Container";

export default function CoachRegisterPage() {
  useAuth();
  return <CoachRegister />;
}
