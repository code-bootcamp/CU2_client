import { useAuth } from "../../../../../src/components/commons/hooks/useAuth";
import CoachRegister from "../../../../../src/components/units/mypage/coach/register/CoachRegister.Container";

export default function CoachRegisterEditPage() {
  useAuth();
  return <CoachRegister isEdit={true} />;
}
