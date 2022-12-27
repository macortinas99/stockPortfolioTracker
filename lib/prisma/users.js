import prisma from '.'

export async function getUsers() {
  try {
    const users = await prisma.user.findMany()
    return { users }
  } catch (error) {
    return { error }
  }
}

export async function createUser(user) {
  try {
    const userFromDB = await prisma.user.create({ data: user })
    return { user: userFromDB }
  } catch (error) {
    return { error }
  }
}

export async function getUserById(id) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function getUserByEmail(userEmail) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    })
    return { user }
  } catch (error) {
    return { error }
  }
}

// export async function verifyUserExists(userEmail) {
//   try {
//     const userExists = await prisma.$exists.user({
//       userEmail,
//     })
//     console.log(userExists)
//     // if (!user) return 0
//     // if(user) return 1
//   } catch (error) {
//     return error
//   }
// }
