// export type IUserDetails = {
//     userid: string;
//     role: 'vendor' | 'admin' | 'superadmin' | 'customer';
//     phone: string;
//     createdAt: string;
//     userDetails?: {
//         name?: {
//             first_name: string;
//             last_name: string;
//         };
//         profile_picture?: {
//             public_id: string;
//             url: string;
//         };
//         email?: string;
//         address?: string;
//     };
//     email?: string;
//     address?: string;
// };

export interface IUserDetails {
    userid: string;
    role: 'vendor' | 'admin' | 'superadmin' | 'customer';
    phone: string;
    createdAt: string;
    userDetails?: {
        name?: {
            first_name: string;
            last_name: string;
        };
        profile_picture?: {
            public_id: string;
            url: string;
        };
        email?: string;
        address?: string;
    };
    email?: string;
    address?: string;
}
