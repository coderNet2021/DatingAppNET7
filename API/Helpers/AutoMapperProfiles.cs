using Api.Extensions;
using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.PhotoUrl,
                            opt => opt
                                   .MapFrom(src => src
                                                   .Photos
                                                   .FirstOrDefault(q => q.IsMain)
                                                   .Url)
                            )
                .ForMember(des => des.Age,
                            opt => opt
                                    .MapFrom(src => src
                                                    .DateOfBirth.CalculateAge())
                            );
            CreateMap<Photo, PhotoDto>();
            CreateMap<MemberUpdateDto, AppUser>();
        }
    }
}