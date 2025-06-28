import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("keith10@test.com");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-6" style={{ position: 'relative' }}>
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        style={{ position: 'absolute', top: 24, left: 24, background: 'none', border: 'none', color: '#1a237e', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        aria-label="Go back"
      >
        <span style={{ fontSize: '1.5rem', marginRight: 6 }}>&larr;</span> Back
      </button>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-esg-blue to-esg-green rounded-xl flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 bg-white rounded-md"></div>
          </div>
          <span className="text-2xl font-bold text-foreground">CogTech AI</span>
        </div>

        <Card className="shadow-2xl border-0 animate-fade-in">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-foreground">
              Sign in
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignIn} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 border-border focus:border-primary focus:ring-primary"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>

              <div className="text-center">
                <span className="text-muted-foreground">New here? </span>
                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Create an account
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
