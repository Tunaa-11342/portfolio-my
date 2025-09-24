import { Briefcase, Camera, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-[23px] font-semibold">
              Designing Interfaces, Crafting Experiences
            </h3>

            <p className="text-muted-foreground">
              Xin chào, mình là Tuấn Vũ – một người mê làm web và thiết kế giao diện. Mình thường dành thời gian để biến những ý tưởng thành những trang web mượt mà, gọn gàng và dễ dùng. Ngoài code, mình cũng khá thích nghịch ngợm với thiết kế để mọi thứ vừa đẹp vừa hợp mắt người dùng.
            </p>

            <p className="text-muted-foreground">
              Ngoài ra, mình còn hứng thú với nhiếp ảnh – coi nó như một cách để bắt lại những khoảnh khắc và góc nhìn riêng. Với mình, sáng tạo là thứ có thể chảy xuyên suốt từ code, thiết kế đến cả hình ảnh, và mình luôn muốn thử những điều mới để nâng trải nghiệm lên một tầm khác.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Xây dựng trang web và ứng dụng trực tuyến linh hoạt, hoạt động tốt trên mọi thiết bị.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Thiết kế giao diện trực quan, mang lại trải nghiệm mượt mà cho người dùng.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Camera className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Photographer</h4>
                  <p className="text-muted-foreground">
                    Khám phá nhiếp ảnh sáng tạo để thêm góc nhìn độc đáo vào các dự án. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
