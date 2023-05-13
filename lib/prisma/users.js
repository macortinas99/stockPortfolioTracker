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
      where: { emailAddress: userEmail },
    })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function updateUser(updatedUser) {
  try {
    console.log('newUser', updatedUser[0])
    let newUserStocks = updatedUser[0].stocks
    let userEmail = updatedUser[0].emailAddress
    const user = await prisma.user.update({
      where: { emailAddress: userEmail },
      data: {
        stocks: newUserStocks,
      },
    })
    console.log(user)
    return { user }
  } catch (error) {
    return { error }
  }
}
