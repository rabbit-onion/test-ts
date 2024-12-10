export interface HelloProps {
  name: string;
  age?: number;
}

// HelloProps 값에 role 추가
export interface Admin extends HelloProps {
  role: string;
}
